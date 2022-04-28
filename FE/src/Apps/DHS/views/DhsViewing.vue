<template>
  <div
    class="flex-col full-element main-container"
    unselectable="on"
    onselectstart="return false;"
  >
    <div class="nav-header">
      <nav-header
        @setUploadFileVisible="setUploadFileVisible(isVisible)"
      ></nav-header>
    </div>
    <div class="main-area flex-row">
      <div class="viewer-area flex-row">
        <div
          class="image-area full-element flex-row"
          style="position: relative; background: black"
        >
          <component
            :is="component"
            :layoutName="layoutName"
            :modelContainer="modelContainer"
          ></component>
        </div>
      </div>

      <div class="panel-area">
        <dsh-panel></dsh-panel>
      </div>
    </div>
    <upload-file ref="uploadFileRef"></upload-file>
  </div>
</template>

<script lang="ts" setup>
import { ModelContainer } from 'uih-mcsf-appframework';
import {
  computed,
  inject,
  ref,
  watch,
  shallowRef,
  defineAsyncComponent
} from 'vue';
import NavHeader from '../components/NavHeader.vue';
import UploadFile from '../components/UploadFile.vue';
import DshPanel from '../components/DshPanel/DshPanel.vue';
import InstrumentInstall from '../components/InstrumentInstall.vue';
import ExactRegister from '../components/ExactRegister.vue';
import { EnumPage, EnumRegisterStep } from '../utils/DhsUtil';
import store from '../store/index';
const uploadFileRef = ref(null);
const modelContainer: ModelContainer = inject('modelContainer');
const importModelVisible = ref(false);
const registerStep = ref(EnumRegisterStep.Installation);
const component = ref('uibot-med-viewer-control');

watch(
  () => store.state.registerStep,
  newVal => {
    if (
      store.state.currentPage === EnumPage.SpaceRegister &&
      newVal === EnumRegisterStep.Installation
    ) {
      component.value = 'instrument-install';
    } else if (
      store.state.currentPage === EnumPage.SpaceRegister &&
      newVal === EnumRegisterStep.ExaRegister
    ) {
      component.value = 'exact-register';
    } else {
      component.value = 'uibot-med-viewer-control';
    }
  }
);

watch(
  () => store.state.currentPage,
  newPage => {
    if (newPage === EnumPage.PlanningAdjust) {
      component.value = 'uibot-med-viewer-control';
    } else if (
      newPage === EnumPage.SpaceRegister &&
      store.state.registerStep === EnumRegisterStep.Installation
    ) {
      component.value = 'instrument-install';
    }
  }
);
const layoutName = 'layout1x1';
const setUploadFileVisible = (isVisible: boolean) => {
  uploadFileRef.value.onShow();
};
</script>

<style lang="less" scoped>
.main-container {
  .nav-header {
    height: 70px;
  }
  .main-area {
    flex: 1;

    .viewer-area {
      flex: 1;

      .common-tool {
        order: 0;
      }

      .image-area {
        flex: 1;
        order: 1;
        position: relative;
      }
    }

    .panel-area {
      width: 22%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .panel-info {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
