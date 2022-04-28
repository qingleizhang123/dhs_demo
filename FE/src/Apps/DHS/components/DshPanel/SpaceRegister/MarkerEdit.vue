<template>
  <div class="main">
    <div v-show="step === 'CoaRegister'">
      <div>
        <button @click="onAddMarker">采集</button>
      </div>
      <div>
        <button @click="onCancle">取消当前点</button>
      </div>
      <div>
        <button>清除所有点</button>
      </div>
      <div>
        <button @click="onCalculate">计算</button>
      </div>
    </div>

    <div v-show="step === 'ExaRegister'">
      <div>
        <button @click="onAddMarker">开始采集</button>
      </div>
      <div>
        <button @click="onCancle">停止采集</button>
      </div>
      <div>
        <button>清除所有点</button>
      </div>
      <div>
        <button @click="onCalculate">计算</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { message } from 'ant-design-vue';
import { EnumMessageNotice } from '../../../utils/DhsUtil';
import store from '../../../store/index';
const step = computed(() => {
  return store.state.registerStep;
});
const messageInfo = computed(() => {
  return store.state.messageNoticeInfo;
});

const onAddMarker = () => {
  message.error('采集失败');
};

const onCancle = () => {
  message.error('粗配准误差过大，请重新采集');
};

const onCalculate = () => {
  messageInfo.value.messageType = EnumMessageNotice.Progress;
  messageInfo.value.messageContent = '计算中';
  messageInfo.value.visible = true;
  setInterval(() => {
    if (messageInfo.value.percent < 100) {
      messageInfo.value.percent = messageInfo.value.percent + 5;
    } else {
      messageInfo.value.messageType = EnumMessageNotice.Default;
      messageInfo.value.visible = false;
    }
  }, 500);
};
</script>

<style lang="less" scoped>
.main {
  div {
    margin-top: 20px;
    button {
      background: #2d343d;
      width: 30%;
      height: 40px;
    }
  }
}
</style>
