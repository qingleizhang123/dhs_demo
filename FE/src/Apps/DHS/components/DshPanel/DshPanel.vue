<template>
  <div class="page-content">
    <component
      :is="currentPage"
      @nextPage="nextPage"
      @prevPage="prevPage"
    ></component>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, defineAsyncComponent, computed, shallowRef } from 'vue';
import { EnumPage } from '../../utils/DhsUtil';
import store from '../../store/index';
const currentPage = computed(() => {
  return store.state.currentPage;
});
const pageList = [
  EnumPage.PlanningAdjust,
  EnumPage.SpaceRegister,
  EnumPage.NavigationMode
];

const nextPage = () => {
  const index = pageList.findIndex(item => item === currentPage.value);
  store.commit('updateCurrentPage', pageList[index + 1]);
};

const prevPage = () => {
  const index = pageList.findIndex(item => item === currentPage.value);
  store.commit('updateCurrentPage', pageList[index - 1]);
};
</script>

<style scoped lang="less">
.page-content {
  height: 100%;
  padding: 0px 15px;
}
</style>
