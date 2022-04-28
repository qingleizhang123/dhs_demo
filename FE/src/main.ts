import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {
  Table,
  List,
  Button,
  Radio,
  Checkbox,
  Dropdown,
  Menu,
  Input,
  Select,
  Slider,
  Modal,
  DatePicker,
  Collapse,
  Row,
  Col,
  Tooltip,
  InputNumber,
  Progress,
  Switch,
  Alert,
  Spin,
  message,
  Upload
} from 'ant-design-vue';
import {
  AppContextMenu,
  Studylist,
  FloatCommonTools,
  PseudoColor,
  ProgressBar,
  MedViewerControlComponent
} from 'uih-mcsf-vue-apptoolkit';
import './styles/index.less';
import 'element-plus/lib/theme-chalk/el-color-picker.css';
import 'element-plus/lib/theme-chalk/el-slider.css';
import PlanningAdjust from '@/Apps/DHS/components/DshPanel/PlanningAdjust/PlanningAdjust.vue';
import SpaceRegister from '@/Apps/DHS/components/DshPanel/SpaceRegister/SpaceRegister.vue';
import NavigationMode from '@/Apps/DHS/components/DshPanel/NavigationMode/NavigationMode.vue';
import InstrumentInstall from '@/Apps/DHS/components/InstrumentInstall.vue';
import ExactRegister from '@/Apps/DHS/components/ExactRegister.vue';

message.config({
  top: '120px',
  maxCount: 1
});

const app = createApp(App);
app.use(store);
app.use(router);
Progress.install(app);
Table.install(app);
List.install(app);
Button.install(app);
Dropdown.install(app);
Menu.install(app);
Select.install(app);
Slider.install(app);
DatePicker.install(app);
Collapse.install(app);
Modal.install(app);
Radio.install(app);
Checkbox.install(app);
Row.install(app);
Col.install(app);
Tooltip.install(app);
Input.install(app);
InputNumber.install(app);
AppContextMenu.install(app);
Studylist.install(app);
PseudoColor.install(app);
FloatCommonTools.install(app);
ProgressBar.install(app);
Switch.install(app);
Alert.install(app);
Spin.install(app);
Upload.install(app);
MedViewerControlComponent.install(app);
app.component('planning-adjust', PlanningAdjust);
app.component('space-register', SpaceRegister);
app.component('navigation-mode', NavigationMode);
app.component('instrument-install', InstrumentInstall);
app.component('exact-register', ExactRegister);
app.mount('#app');

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = String(to.meta.title);
  }
  next();
});
