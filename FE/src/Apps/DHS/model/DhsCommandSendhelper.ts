import { ModelContainer } from 'uih-mcsf-appframework';
import * as ViewerKit from 'uih-mcsf-apptoolkit';
import { DHS } from '../../protocol/TkaSurgeryPlanning';
import $UIBotPB = DHS.ProtoBuf;

export class DshCommandSendHelper {
  // 数据上传
  static sendUploadFiles(
    modelContainer: ModelContainer,
    file: $UIBotPB.IFile[]
  ) {
    const commandSender = modelContainer.getModel(
      ViewerKit.ModelNameConst.CommandSender
    ) as ViewerKit.ICommandSender;
    const files = $UIBotPB.Files.create();
    files.file = file;
    const buffer = $UIBotPB.Files.encode(files).finish();
    ViewerKit.CommandHelper.sendPanelOperation(
      commandSender,
      buffer,
      'UploadFile'
    );
  }
}
