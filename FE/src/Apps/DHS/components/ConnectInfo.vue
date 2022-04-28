<template>
  <div class="connect-message">
    <div class="mini-message">
      <img
        :class="{ disable: !connectInfo.miniStatus }"
        src="assets/images/mini.svg"
      />
      <span v-show="connectInfo.miniStatus"> mini已连接 </span>
      <span
        :class="{ disconnect: !connectInfo.miniStatus }"
        v-show="!connectInfo.miniStatus"
      >
        mini未连接
      </span>
    </div>
    <div class="ar-message" @click="onChangeARStatus()">
      <img
        :class="{ disable: !connectInfo.arStatus }"
        src="assets/images/ar.svg"
      />
      <span v-show="connectInfo.arStatus"> 眼镜已连接 </span>
      <span
        :class="{ disconnect: !connectInfo.arStatus }"
        v-show="!connectInfo.arStatus"
      >
        眼镜未连接
      </span>
    </div>
    <div class="headstand-message">
      <img
        :class="{ disable: !connectInfo.headstandStatus }"
        src="assets/images/refrence.svg"
      />
      <span :class="{ disconnect: !connectInfo.headstandStatus }">
        头架参考靶
      </span>
    </div>
    <div class="pen-message">
      <img
        :class="{ disable: !connectInfo.penStatus }"
        src="assets/images/refrence.svg"
      />
      <span :class="{ disconnect: !connectInfo.penStatus }">注册笔参考靶</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { message } from 'ant-design-vue';
import { EnumMessageNotice } from '../utils/DhsUtil';
import store from '../store/index';
const connectInfo = computed(() => {
  return store.state.connectInfo;
});
const messageInfo = computed(() => {
  return store.state.messageNoticeInfo;
});

const onChangeARStatus = () => {
  connectInfo.value.arStatus = !connectInfo.value.arStatus;
  if (!connectInfo.value.arStatus) {
    messageInfo.value.messageType = EnumMessageNotice.WarningDialog;
    messageInfo.value.messageContent = 'AR眼镜连接失败，请检查AR眼镜连接状态';
    messageInfo.value.visible = true;
  }
};
</script>

<style lang="less" scoped>
.connect-message {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  .mini-message,
  .ar-message,
  .headstand-message {
    img {
      margin-left: calc(50% - 16px);
    }
    span {
      width: 72px;
      display: inline-block;
      margin-left: calc(50% - 36px);
    }
  }
  .pen-message {
    img {
      margin-left: calc(50% - 16px);
    }
    span {
      width: 84px;
      display: inline-block;
      margin-left: calc(50% - 42px);
    }
  }
  .disconnect {
    color: red;
  }
  .disable {
    opacity: 0.3;
  }
}
</style>
