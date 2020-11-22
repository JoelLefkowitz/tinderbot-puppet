const { dest, src, task } = require("gulp");
const ts = require("gulp-typescript");
const tslint = require("gulp-tslint");
const uglify = require("gulp-uglify");

async function build() {
	const tsProject = ts.createProject("tsconfig.json");
	await src("src/**/*").pipe(tsProject()).js.pipe(uglify()).pipe(dest("dist/"));
}

async function lint() {
	await src("src/**/*").pipe(tslint()).pipe(tslint.report());
}

task("build", build);
task("lint", lint);
