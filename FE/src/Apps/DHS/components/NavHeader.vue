<template>
  <div class="main-container">
    <button @click="importData()">导入</button>
    <ul>
      <li :class="{ select: currentPage === 'planning-adjust' }">规划调整</li>
      <li :class="{ select: currentPage === 'space-register' }">空间注册</li>
      <li :class="{ select: currentPage === 'navigation-mode' }">导航模式</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  computed,
  inject,
  defineProps,
  defineEmits,
  getCurrentInstance
} from 'vue';
import { ModelContainer } from 'uih-mcsf-appframework';
import store from '../store/index';
const currentPage = computed(() => {
  return store.state.currentPage;
});
const emits = defineEmits<{
  (e: 'setUploadFileVisible', isVisible: boolean);
}>();
const modelContainer = inject('modelContainer') as ModelContainer;
const that = getCurrentInstance();
modelContainer.addModel(that, 'NavHeader');

const importData = () => {
  emits('setUploadFileVisible', true);
};
</script>

<style lang="less" scoped>
.main-container {
  height: 70px;
  font-size: 18px;
  button {
    border: 0px;
    width: 60px;
    margin: 10px;
    height: 50px;
    border-radius: 4px;
    background: #04856f;
    cursor: pointer;
  }
  ul,
  li {
    display: inline-block;
  }
  ul {
    border: 2px solid #3f3f4b;
  }
  li {
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 200px;
  }
  li:not(:last-child) {
    border-right: 2px solid #3f3f4b;
  }
  .select {
    background: #005a4c;
  }
}
</style>
