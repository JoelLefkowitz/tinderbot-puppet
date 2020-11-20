const childProcess = require("child_process");

module.exports = class ConsoleProcess {
	constructor(execCmd) {
		this.cmdHead = execCmd[0];
		this.cmdTail = execCmd.slice(1);
	}

	run() {
		const worker = childProcess.spawn(this.cmdHead, this.cmdTail);
		return new Promise((resolve, reject) => {
			worker.stdout.on("data", data => {
				process.stdout.write(data);
			});

			worker.stderr.on("data", data => {
				process.stdout.write(data);
			});

			worker.on("error", data => {
				reject(error(data));
			});

			worker.on("close", exitCode => {
				resolve(exitCode);
			});
		});
	}
};
