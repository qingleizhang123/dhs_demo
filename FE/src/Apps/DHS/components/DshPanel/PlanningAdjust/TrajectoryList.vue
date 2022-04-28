<template>
  <div class="main">
    <label>路径列表</label>
    <table class="trajectory-table">
      <thead>
        <td class="trajectory-name">名称</td>
        <td class="trajectory-color">颜色</td>
        <td class="trajectory-opacity">长度</td>
        <td class="trajectory-oper">
          <img
            v-if="allTrajectoryVisible"
            src="assets/images/show.svg"
            @click="onChangeAllVisible(false)"
          />
          <img
            v-if="!allTrajectoryVisible"
            src="assets/images/hide.svg"
            @click="onChangeAllVisible(true)"
          />
        </td>
      </thead>
      <tbody>
        <tr v-for="item of trajectoryList" :key="item">
          <td class="trajectory-name">{{ item.name }}</td>
          <td class="trajectory-color">
            <el-color-picker
              color-format="rgb"
              show-alpha
              v-model="item.color"
              @active-change="onChangeColor($event, item.id)"
            />
          </td>
          <td class="trajectory-length">{{ item.length }}mm</td>
          <td class="trajectory-oper">
            <img
              v-if="item.visible"
              src="assets/images/show.svg"
              @click="onChangeVisible(item.id, false)"
            />
            <img
              v-if="!item.visible"
              src="assets/images/hide.svg"
              @click="onChangeVisible(item.id, true)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElColorPicker, ElSlider } from 'element-plus';
interface TrajectoryItem {
  id: number;
  name: string;
  color: string;
  length: number;
  visible: boolean;
}
const trajectoryList = ref(new Array<TrajectoryItem>());
trajectoryList.value.push({
  id: 1,
  name: '组织1',
  color: 'rgba',
  length: 100,
  visible: true
});
trajectoryList.value.push({
  id: 2,
  name: '组织2',
  color: 'rgba',
  length: 100,
  visible: true
});
trajectoryList.value.push({
  id: 3,
  name: '组织3',
  color: 'rgba',
  length: 100,
  visible: true
});
const allTrajectoryVisible = ref(true);

const onChangeColor = (color: string, id: number) => {
  console.log(color, id);
};

const onChangeVisible = (id: number, visible: boolean) => {
  trajectoryList.value.forEach(trajectory => {
    if (trajectory.id === id) trajectory.visible = visible;
  });
};

const onChangeAllVisible = (visible: boolean) => {
  allTrajectoryVisible.value = visible;
  trajectoryList.value.forEach(trajectory => {
    trajectory.visible = visible;
  });
};
</script>

<style lang="less" scoped>
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
  .trajectory-table {
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
    .trajectory-name {
      width: 30%;
    }
    .trajectory-color {
      width: 20%;
      position: relative;
    }
    .trajectory-length {
      width: 40%;
    }
    .trajectory-oper {
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
