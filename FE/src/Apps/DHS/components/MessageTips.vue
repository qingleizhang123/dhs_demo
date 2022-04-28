<template>
  <div
    class="message-tip"
    ref="messageTip"
    v-if="messageInfo.messageType !== 0"
  >
    <div
      v-if="messageInfo.messageType === 1 && messageInfo.visible"
      class="data-load-progress"
    >
      <div class="progress-info">{{ messageInfo.messageContent }}</div>
      <a-progress :percent="messageInfo.percent" :showInfo="false"></a-progress>
    </div>

    <a-modal
      v-model:visible="isWarningDialogBoxVisible"
      title="提示"
      :maskClosable="false"
      :getContainer="() => $refs.messageTip"
    >
      <div class="tip-content" ref="tipContentContainer">
        <div>
          <img src="assets/images/error.png" />
          <p>{{ messageInfo.messageContent }}</p>
        </div>
      </div>
      <div class="bottom-line"></div>
      <template #footer>
        <a-button @click="onWarningCancelClick()">取消</a-button>
        <a-button @click="onWarningOkClick()">确定</a-button>
      </template>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { EnumMessageNotice } from '../utils/DhsUtil';
import store from '../store/index';
const messageInfo = computed(() => {
  return store.state.messageNoticeInfo;
});

const isWarningDialogBoxVisible = computed(() => {
  return (
    store.state.messageNoticeInfo.messageType === 2 &&
    store.state.messageNoticeInfo.visible
  );
});

const onWarningCancelClick = () => {
  messageInfo.value.messageType = EnumMessageNotice.Default;
  messageInfo.value.visible = false;
};

const onWarningOkClick = () => {
  messageInfo.value.messageType = EnumMessageNotice.Default;
  messageInfo.value.visible = false;
};
</script>

<style lang="less" scoped>
.message-tip {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  z-index: 10000;
  // 模态对话框格式
  :deep(.ant-modal) {
    top: 250px;
  }

  :deep(.ant-modal-content) {
    height: 376px;
    width: 640px;
  }

  .data-load-progress {
    position: absolute;
    width: 440px;
    height: 111px;
    top: 50%;
    left: 50%;
    z-index: 99999;
    transform: translateX(-50%);
    text-align: center;
    border-radius: 4px;
    background: rgba(48, 54, 64, 0.8);
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);

    .progress-info {
      margin-top: 35px;
      height: 21px;
      font-size: 16px;
      color: #ffffff;
      font-family: MicrosoftYaHei-Bold, sans-serif;
      text-align: center;
      font-weight: 700;
    }
  }

  .tip-content {
    // height: 198px;
    img {
      height: 64px;
      width: 64px;
      margin: 40px auto 24px auto;
    }

    p {
      height: 40px;
      line-height: 40px;
      padding-left: 45px;
      padding-right: 45px;
      font-family: MicrosoftYaHei-Bold, sans-serif;
      text-align: center;
      font-size: 20px;
      color: #ffffff;
    }
  }
  .bottom-line {
    // margin-top:32px;
    background-image: linear-gradient(
      134deg,
      rgba(37, 42, 51, 0) 0%,
      #252a33 50%,
      rgba(37, 42, 51, 0) 100%
    );
    height: 2px;
    width: 608px;
    display: flex;
    margin-top: 32px;
  }
}
</style>
