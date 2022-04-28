<template>
  <div class="main-panel">
    <div class="main-info">
      <tissue-list></tissue-list>
      <trajectory-list></trajectory-list>
      <div class="register-type">
        <a-select
          v-model:value="registerType"
          :size="'large'"
          style="width: 200px"
          :options="options"
          @change="handleChange"
        >
        </a-select>
      </div>
    </div>
    <div class="oper">
      <button class="right" @click="nextPage">下一步</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import type { SelectProps } from 'ant-design-vue';
import TissueList from './TissueList.vue';
import TrajectoryList from './TrajectoryList.vue';
const emits = defineEmits<{
  (event: 'nextPage'): void;
}>();
const registerType = ref('接触式注册');
const options = ref<SelectProps['options']>([
  {
    value: 1,
    label: '接触式注册'
  },
  {
    value: 2,
    label: '非接触式注册',
    disabled: true
  }
]);

const handleChange: SelectProps['onChange'] = value => {
  console.log(value);
};

const nextPage = () => {
  emits('nextPage');
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
  .register-type {
    margin-top: 20px;
  }
  .oper {
    height: 40px;
    margin-bottom: 10px;
    .right {
      height: 40px;
      width: 160px;
      float: right;
      background: #04856f;
      border-radius: 4px;
    }
  }
}
</style>
