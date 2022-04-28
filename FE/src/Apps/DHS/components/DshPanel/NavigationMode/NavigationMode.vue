<template>
  <div class="main-panel">
    <div class="main-info">
      <connect-info></connect-info>
      <tissue-list></tissue-list>
      <trajectory-list></trajectory-list>
    </div>
    <div class="oper">
      <button class="left" @click="prevPage">上一步</button>
      <button
        v-show="step === 'LocateNavigation'"
        class="right"
        @click="nextPage"
      >
        下一步
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue';
import ConnectInfo from '../../ConnectInfo.vue';
import TissueList from '../PlanningAdjust/TissueList.vue';
import TrajectoryList from '../PlanningAdjust/TrajectoryList.vue';
import store from '../../../store/index';
const emits = defineEmits<{
  (event: 'nextPage'): void;
  (event: 'prevPage'): void;
}>();
const step = computed(() => {
  return store.state.navigationStep;
});
const stepList = ['LocateNavigation', 'ExecutePuncture'];

const nextPage = () => {
  const stepCounts = stepList.length;
  const currentIndex = stepList.findIndex(item => item === step.value);
  if (currentIndex < stepCounts - 1) {
    store.commit('updateNavigationStep', stepList[currentIndex + 1]);
  } else {
    emits('nextPage');
  }
};

const prevPage = () => {
  const stepCounts = stepList.length;
  const currentIndex = stepList.findIndex(item => item === step.value);
  if (currentIndex > 0) {
    store.commit('updateNavigationStep', stepList[currentIndex - 1]);
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
</style>
