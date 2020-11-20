const { dest, series, task } = require("gulp");
const ts = require("gulp-typescript");
const ConsoleProcess = require("./utils/processes.js");

task("build", async () => {
	ts.createProject("tsconfig.json").src().pipe(ts()).pipe(dest("dist/"));
});

task("autosaveDelay", async () => setTimeout(() => {}, 1000));

task("run", async () => {
	const process = new ConsoleProcess(["node", "dist/main.js"]);
	return process.run();
});

exports.default = series("build", "autosaveDelay", "run");
