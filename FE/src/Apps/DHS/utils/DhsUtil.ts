import * as Viewer from 'uih-mcsf-medviewercontrol';
import * as AppToolKit from 'uih-mcsf-apptoolkit';
export class MedViewerHelper {
  static getCellsByCellType(
    cellType: string,
    medViewer: Viewer.MedViewerControl
  ): Viewer.MedViewerControlCell[] {
    return medViewer.cells.filter(
      m => (m as AppToolKit.AppCell).cellType === cellType
    );
  }
}

export function readString(buffer: Uint8Array) {
  let s = '';
  for (const n of buffer) {
    s += String.fromCharCode(n);
  }
  return s;
}

/**
 * 字符串传Uint8Array
 * @param str string
 * @returns 字符串传Uint8Array
 */
export function stringToUint8Array(str: string): Uint8Array {
  const arr = [];
  for (let i = 0; i < str.length; ++i) {
    arr.push(str.charCodeAt(i));
  }

  return new Uint8Array(arr);
}

export enum EnumPage {
  PlanningAdjust = 'planning-adjust',
  SpaceRegister = 'space-register',
  NavigationMode = 'navigation-mode'
}

export enum EnumRegisterStep {
  Installation = 'Installation',
  CoaRegister = 'CoaRegister',
  ExaRegister = 'ExaRegister',
  AccuVerify = 'AccuVerify'
}

export enum EnumMessageNotice {
  Default = 0, // 都不显示
  Progress = 1, // 进度条
  WarningDialog = 2 // 错误提示对话框
}

export class ConnectInfo {
  miniStatus = false;
  arStatus = true;
  headstandStatus = true;
  penStatus = false;
}

export class MessageNoticeInfo {
  messageType: EnumMessageNotice = EnumMessageNotice.Default;
  messageContent = '';
  percent = 10;
  visible = false;
}
