echo 请确保你已经使用npm 安装了 全局的protobufjs模块，并能在任意命令行窗口使用pbjs 命令。请在任意命令行数pbjs -help来确认。

echo 开始编译proto文件
%~d0
cd %~p0

pbjs -t static-module -w commonjs -o TkaSurgeryPlanning.js dhs.proto dhs_enums.proto

rem pbjs -t static-module -w commonjs -o AppCommonUibot.js ../../../../../../../../SurgeryPlanning/BE/Protocols/mcsf_app_common_uibot.proto ../../../../../../../../SurgeryPlanning/BE/Protocols/protocol_common.proto ../../../../../../../../SurgeryPlanning/BE/Protocols/protocol_enums.proto ../../../../../../../../SurgeryPlanning/BE/Protocols/mcsf_app_common_protocol_config.proto 

echo  结束.
pause
