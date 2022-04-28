<template>
  <a-modal
    v-model:visible="importModelVisible"
    width="1000px"
    title="导入"
    centered
    wrapClassName="upload-modal"
    :closable="true"
    :maskClosable="false"
  >
    <div class="local-import">
      <label class="upload-directory" @dragover="dragOver" @drop="dropForFiles">
        <input
          type="file"
          style="display: none"
          webkitdirectory
          @change="uploadDirectory"
          ref="fileInput1"
        />
        <img src="assets/images/addfolder.svg" alt="icon" />
        <span class="center-text">上传文件夹</span>
        <span class="bottom-text">支持文件/文件夹拖拽导入</span>
      </label>
      <label class="upload-files" @dragover="dragOver" @drop="dropForFiles">
        <input
          type="file"
          style="display: none"
          multiple
          @change="uploadFiles"
          accept=".dcm, .dicom, .stl, .ply"
          ref="fileInput2"
        />
        <img src="assets/images/addfile.svg" alt="icon" />
        <span class="center-text">上传文件</span>
        <span class="bottom-text">支持文件/文件夹拖拽导入</span>
      </label>
    </div>
    <!-- <VirtualBar
      ref="virtualBar"
      :key="barKey"
      :stroke-height="16"
      :isFinished="isFinished"
      :resCode="resCode"
      :currentNumber="currentNumber"
      :failedNumber="failedNumber"
      :totalNumber="totalNumber"
      :notDicomNumber="notDicomNumber"
      :isShowProgess="isShowProgess"
      @cancelUpload="onCancelUpload"
    ></VirtualBar> -->
    <template #footer>
      <a-button @click="onCancel()"> 取消 </a-button>
      <a-button
        :class="{ disable: filedata.srcfiles.length === 0 }"
        :disable="filedata.srcfiles.length === 0"
        @click="onOk()"
      >
        导入
      </a-button>
    </template>
  </a-modal>
</template>

<script lang="ts" setup>
import { ref, reactive, defineProps, defineExpose, inject } from 'vue';
import { InboxOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import VirtualBar from './VirtualBar.vue';
import { ModelContainer } from 'uih-mcsf-appframework';
import { DshCommandSendHelper } from '../model/DhsCommandSendhelper';
import { DHS } from '../../protocol/TkaSurgeryPlanning';
import $UIBotPB = DHS.ProtoBuf;
import SparkMD5 from 'spark-md5';
const modelContainer: ModelContainer = inject('modelContainer');
const importModelVisible = ref(false);
const fileInput1 = ref(null);
const fileInput2 = ref(null);
const virtualBar = ref(null);
const showBar = false;
let currentNumber = 100;
let totalNumber = 200;
let successNumber = 200;
let failedNumber = 0;
let notDicomNumber = 0;
const filedata = reactive({
  srcfiles: []
});
let fileCount = 0;
let handleCount = 0;
let isFinished = false;
const isShowProgess = false;
const barKey = 0;
let resCode = '';
let cancelUpload = false; // 取消上传
const maxConcurrentCount = 6;

/**
 * 上传、拖拽事件----start---------------------------------------
 */
const uploadDirectory = (e: any) => {
  reset();
  filedata.srcfiles = [...e.target.files];
};

const uploadFiles = (e: any) => {
  reset();
  filedata.srcfiles = [...e.target.files];
};

const dropForFiles = (e: DragEvent) => {
  reset();
  e.stopPropagation();
  e.preventDefault();
  reset();
  if (e.dataTransfer == null) return;
  const items = e.dataTransfer.items;
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < items.length; i++) {
    const item = items[i].webkitGetAsEntry();
    if (item) {
      // 读取文件
      scanFiles(item);
    }
  }
};
const scanFiles = (item: any) => {
  // 如果是目录，则递归读取
  if (item.isDirectory) {
    const directoryReader = item.createReader();
    const fnEntries = (entries: any) => {
      // 循环目录内容
      entries.forEach((entry: any) => {
        scanFiles(entry);
      });
      if (entries.length > 0) {
        directoryReader.readEntries(fnEntries);
      }
    };
    directoryReader.readEntries(fnEntries);
  } else if (item.isFile) {
    fileCount++;
    item.file((f: any) => {
      filedata.srcfiles.value.push(f);
      handleCount++;
    });
  }
};

const dragOver = (e: DragEvent) => {
  e.stopPropagation();
  e.preventDefault();
  if (e.dataTransfer != null) {
    e.dataTransfer.dropEffect = 'copy';
  }
};

const reset = () => {
  fileCount = 0;
  handleCount = 0;

  filedata.srcfiles = [];
  currentNumber = 0;
  totalNumber = 0;
  isFinished = false;
  failedNumber = 0;
  notDicomNumber = 0;
  successNumber = 0;
  resCode = '';
  cancelUpload = false;
};

const onCancel = () => {
  importModelVisible.value = false;
};

const onOk = () => {
  const pormiseList: any[] = [];
  const fileArr: $UIBotPB.IFile[] = [];
  filedata.srcfiles.forEach(item => {
    pormiseList.push(
      new Promise((resolve, reject) => {
        const file = $UIBotPB.File.create();
        const reader = new FileReader();
        const spark = new SparkMD5.ArrayBuffer();
        reader.readAsArrayBuffer(item); // 转化二进制流，异步方法
        reader.onload = e => {
          console.log(e.target.result);
          spark.append(e.target.result);
          file.filename = item.name;
          file.size = item.size;
          file.data = new Uint8Array(e.target.result);
          file.md5 = spark.end();
          fileArr.push(file);
          resolve();
        };
      })
    );
  });
  Promise.all(pormiseList).then(() => {
    DshCommandSendHelper.sendUploadFiles(modelContainer, fileArr);
    filedata.srcfiles = [];
  });
  // virtualBar.value.updateVisible(true);
};

const onShow = () => {
  importModelVisible.value = true;
};

const onCancelUpload = () => {
  console.log(filedata.srcfiles.length);
};

defineExpose({
  onShow
});
</script>
<style lang="less" scoped>
:deep(.ant-modal-content) {
  height: 630px !important;
  width: 1000px !important;
}
.ant-modal-body {
  height: 500px !important;
}
.local-import {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .upload-directory,
  .upload-files {
    width: 50%;
    height: 500px;
    border: 1px dashed #323843;
    background-color: #242930;
    display: flex;
    justify-content: center;
    justify-items: center;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    img {
      height: 150px;
      margin: 0 auto;
      margin-bottom: 20px;
      flex: 0;
    }
    .center-text {
      flex: 0;
      font-family: MicrosoftYaHei-Bold;
      font-size: 16px;
      color: #9ca4b3;
      text-align: center;
    }
    .bottom-text {
      font-family: MicrosoftYaHei;
      font-size: 14px;
      color: #9ca4b3;
      text-align: center;
    }
  }
}

.disable {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
