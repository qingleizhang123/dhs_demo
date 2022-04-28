import Vuex from 'vuex';
import {
  EnumPage,
  EnumRegisterStep,
  ConnectInfo,
  MessageNoticeInfo
} from '../utils/DhsUtil';

export default new Vuex.Store({
  state: {
    currentPage: EnumPage.PlanningAdjust,
    registerStep: EnumRegisterStep.Installation,
    navigationStep: 'LocateNavigation',
    connectInfo: new ConnectInfo(),
    messageNoticeInfo: new MessageNoticeInfo(),
    isConfirmInstall: false
  },
  getters: {},
  mutations: {
    updateCurrentPage(state, currentPage) {
      state.currentPage = currentPage;
    },
    updateConnectInfo(state, connectInfo) {
      state.connectInfo = connectInfo;
    },
    updateMessageNoticeInfo(state, messageNoticeInfo) {
      state.messageNoticeInfo = messageNoticeInfo;
    },
    updateRegisterStep(state, registerStep) {
      state.registerStep = registerStep;
    },
    updateNavigationStep(state, navigationStep) {
      state.navigationStep = navigationStep;
    },
    updateIsInConfirmInstall(state, isConfirmInstall) {
      state.isConfirmInstall = isConfirmInstall;
    }
  }
});
