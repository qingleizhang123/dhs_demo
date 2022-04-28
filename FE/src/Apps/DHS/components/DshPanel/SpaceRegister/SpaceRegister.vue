<template>
  <div class="main-panel">
    <div class="main-info">
      <connect-info></connect-info>
      <marker-edit :step="step"></marker-edit>
    </div>
    <div class="oper">
      <button class="left" @click="prevPage">上一步</button>
      <button
        v-show="step !== 'AccuVerify'"
        class="right"
        :disabled="!isConfirmInstall"
        :class="{ disable: !isConfirmInstall }"
        @click="nextPage"
      >
        下一步
      </button>
      <button v-show="step === 'AccuVerify'" class="right" @click="nextPage">
        确认
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, computed, watch } from 'vue';
import ConnectInfo from '../../ConnectInfo.vue';
import MarkerEdit from './MarkerEdit.vue';
import { EnumPage, EnumRegisterStep } from '../../../utils/DhsUtil';
import store from '../../../store/index';
const currentPage = store.state.currentPage;
const isConfirmInstall = computed(() => {
  return store.state.isConfirmInstall;
});
const step = computed(() => {
  return store.state.registerStep;
});
const stepList = [
  EnumRegisterStep.Installation,
  EnumRegisterStep.CoaRegister,
  EnumRegisterStep.ExaRegister,
  EnumRegisterStep.AccuVerify
];
const emits = defineEmits<{
  (event: 'nextPage'): void;
  (event: 'prevPage'): void;
}>();

const nextPage = () => {
  const stepCounts = stepList.length;
  const currentIndex = stepList.findIndex(item => item === step.value);
  if (currentIndex < stepCounts - 1) {
    store.commit('updateRegisterStep', stepList[currentIndex + 1]);
  } else {
    emits('nextPage');
  }
};

const prevPage = () => {
  const stepCounts = stepList.length;
  const currentIndex = stepList.findIndex(item => item === step.value);
  if (currentIndex > 0) {
    store.commit('updateRegisterStep', stepList[currentIndex - 1]);
  } else {
    emits('prevPage');
  }
};
</script>

<style lang="less" scoped>
.main-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  .main-info {
    flex: 1;
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
        .disable {
          opacity: 0.3;
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
    }
  }
  .oper {
    height: 40px;
    margin-bottom: 10px;
    .left {
      height: 40px;
      width: 40%;
      background: #2d343d;
      border-radius: 4px;
    }
    .right {
      height: 40px;
      width: 40%;
      float: right;
      background: #04856f;
      border-radius: 4px;
    }
  }
}
.disable {
  opacity: 0.3;
}
</style>
