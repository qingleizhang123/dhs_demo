<template>
  <div class="main-content">
    <div class="gif-content">
      <img src="assets/images/reference1.gif" />
    </div>
    <div class="medviewer-content image-area full-element flex-row">
      <uibot-med-viewer-control
        :layoutName="layoutName"
        :modelContainer="modelContainer"
      ></uibot-med-viewer-control>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ModelContainer } from 'uih-mcsf-appframework';
import { inject, ref } from 'vue';
const layoutName = 'layout1x1';
const modelContainer: ModelContainer = inject('modelContainer');
</script>

<style lang="less" scoped>
.main-content {
  display: flex;
  width: 100%;
  .gif-content,
  .medviewer-content {
    flex: 1;
  }
  .gif-content {
    position: relative;
    img {
      width: 60%;
      height: 60%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
