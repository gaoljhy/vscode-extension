const vscode = require('vscode');
var CronJob = require('cron').CronJob;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

//	console.log('Congratulations, your extension "timeclock" is now active!');
	let timeCurrent = new Date().getTime();
	// get current time in GLNZ

	var timeArryAdd = ["+1mins","+10mins","+30mins","+90mins"];
	// var timeArrySub = ["-1mins","-10mins","-30mins","-90mins"];
	let disposable = vscode.commands.registerCommand('extension.timeclock', function () {
		let ncount = 0;
		let pol = "";
		vscode.window.showQuickPick(timeArryAdd).then(value => {
			vscode.window.showInformationMessage('time has been set ' + value);
			if (value) {
				ncount = value.split("mins")[0].split("+")[1];
			} else {
				ncount = 0- value.split("mins")[0].split("-")[1];
			}
			timeCurrent += ncount*60*1000;
			pol = new Date(timeCurrent).toTimeString();
			vscode.window.showInformationMessage('i will notice you at ' + pol);
			let strc= pol.split(" ")[0].split(":");
			let plp = strc[2] + " " + strc[1] + " " + strc[0] + " * * *";
			pol.split(" ")[0].split(":")[2]+" "+
			new CronJob(plp, function() {
			vscode.window.showInformationMessage("its time get step in " + pol);
		  }, null, true, 'Asia/Shanghai');
		  
		 })
		 
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
