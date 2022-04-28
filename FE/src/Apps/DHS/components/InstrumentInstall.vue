<template>
  <div class="main">
    <div class="reference-img">
      <div class="headStock">
        <span>头架参考靶安装示意图</span>
        <img src="assets/images/reference.png" />
      </div>
      <div class="pen">
        <span>注册笔和交互手柄的安装示意图</span>
        <img src="assets/images/pen.png" />
      </div>
    </div>
    <div class="comfirm-oper">
      <button @click="onConfirmInstall">确认安装完成</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
import store from '../store/index';
const onConfirmInstall = () => {
  store.commit('updateIsInConfirmInstall', true);
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 18px;
  .reference-img {
    height: 80%;
    display: flex;
    .headStock,
    .pen {
      flex: 1;
      text-align: center;
      padding: 5%;
      img {
        height: 80%;
        width: 80%;
        margin: 5% auto;
      }
    }
  }
  .comfirm-oper {
    text-align: center;
    button {
      height: 50px;
      width: 20%;
      background: #04856f;
      border-radius: 4px;
    }
  }
}
</style>
