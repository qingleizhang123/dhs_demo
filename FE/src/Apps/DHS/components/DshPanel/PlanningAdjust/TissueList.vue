<template>
  <div class="main">
    <label>组织列表</label>
    <table class="tissue-table">
      <thead>
        <td class="tissue-name">名称</td>
        <td class="tissue-volume">体积</td>
        <td class="tissue-color">颜色</td>
        <td class="tissue-opacity">透明度</td>
        <td class="tissue-oper">
          <img v-if="allTissueVisible" src="assets/images/show.svg" @click="onChangeAllVisible(false)" />
          <img v-if="!allTissueVisible" src="assets/images/hide.svg" @click="onChangeAllVisible(true)" />
        </td>
      </thead>
      <tbody>
        <tr v-for="item of tissueList" :key="item">
          <td class="tissue-name">{{ item.name }}</td>
          <td class="tissue-volume">{{ item.volume }}cm³</td>
          <td class="tissue-color">
            <el-color-picker
              color-format="rgb"
              show-alpha
              v-model="item.color"
              @active-change="onChangeColor($event, item.id)"
            />
          </td>
          <td class="tissue-opacity">
            <a-slider
              :tipFormatter="null"
              :min="0"
              :max="100"
              v-model:value="item.opacity"
              @change="onChangeOpacity($event, item.id)"
            ></a-slider>
            <span>{{ item.opacity }}%</span>
          </td>
          <td class="tissue-oper">
            <img v-if="item.visible" src="assets/images/show.svg" @click="onChangeVisible(item.id, false)" />
            <img v-if="!item.visible" src="assets/images/hide.svg" @click="onChangeVisible(item.id, true)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElColorPicker, ElSlider } from 'element-plus';
interface TissueItem {
  id: number;
  name: string;
  volume: number;
  color: string;
  opacity: number;
  visible: boolean;
}
const tissueList = ref(new Array<TissueItem>());
tissueList.value.push({
  id: 1,
  name: '组织1',
  volume: 22,
  color: 'rgba',
  opacity: 70,
  visible: true,
});
tissueList.value.push({
  id: 2,
  name: '组织2',
  volume: 23,
  color: 'rgba',
  opacity: 70,
  visible: true,
});
tissueList.value.push({
  id: 3,
  name: '组织3',
  volume: 24,
  color: 'rgba',
  opacity: 70,
  visible: true,
});
const allTissueVisible = ref(true);

const onChangeColor = (color: string, id: number) => {
  console.log(color, id);
};

const onChangeOpacity = (opacity: string, id: number) => {
  console.log(opacity, id);
};

const onChangeVisible = (id: number, visible: boolean) => {
  tissueList.value.forEach(tissue => {
    if (tissue.id === id) tissue.visible = visible;
  });
};

const onChangeAllVisible = (visible: boolean) => {
  allTissueVisible.value = visible;
  tissueList.value.forEach(tissue => {
    tissue.visible = visible;
  });
};
</script>

<style lang="less" scoped>
:deep(.ant-slider) {
  margin: 0px 4%;
  width: 70%;
  display: inline-block;
}
:deep(.el-color-picker) {
  position: absolute;
  height: 24px;
  width: 24px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .el-color-picker__mask {
    background-color: transparent;
  }

  .el-color-picker__trigger {
    border: none;
    height: 24px;
    width: 24px;
    padding: 0;
  }

  .is-icon-arrow-down,
  .el-color-picker__color {
    color: transparent;
    border: 0;
    border-radius: 0;
  }
}
.main {
  label {
    height: 36px;
    line-height: 36px;
    display: inline-block;
  }
  .tissue-table {
    width: 100%;
    border-top: 1px solid rgba(187, 207, 242, 1);
    border-left: 1px solid rgba(187, 207, 242, 1);
    border-collapse: collapse; /*设置单元格的边框合并为1*/
    td {
      height: 36px;
      line-height: 36px;
      text-align: center;
      border-bottom: 1px solid rgba(187, 207, 242, 1);
      border-right: 1px solid rgba(187, 207, 242, 1);
    }
    .tissue-name {
      width: 20%;
    }
    .tissue-volume {
      width: 20%;
    }
    .tissue-color {
      width: 10%;
      position: relative;
    }
    .tissue-opacity {
      width: 40%;
      span {
        width: 22%;
        display: inline-block;
      }
    }
    .tissue-oper {
      position: relative;
      width: 10%;
      img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
