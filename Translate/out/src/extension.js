const translate = require('google-translate-api-cn');
const vscode = require('vscode');


translate('请问如何调用谷歌翻译API', {to: 'en'}).then(res => {
    console.log(res.text);
    //=> I speak English
    console.log(res.from.language.iso);
    //=> nl
}).catch(err => {
    console.error(err);
});





/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
exports.activate = function(context) {
	console.log('恭喜，您的扩展“vscode-plugin-demo”已被激活！');
	// 注册命令
	context.subscriptions.push(vscode.commands.registerCommand('extension.sayHello', function () {
		vscode.window.showInformationMessage('Hello World!');
	}));
};

/**
 * 插件被释放时触发
 */
exports.deactivate = function() {
	console.log('您的扩展“vscode-plugin-demo”已被释放！')
};