echo 请确保你已经使用npm 安装了 全局的protobufjs模块，并能在任意命令行窗口使用pbjs 命令。请在任意命令行数pbjs -help来确认。


%~d0
cd %~p0

echo 开始编译proto文件

pbts -o TkaSurgeryPlanning.d.ts TkaSurgeryPlanning.js
@rem pbts -o AppCommonUibot.d.ts AppCommonUibot.js

echo  结束.
pause