import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";
import { NgModule } from "@angular/core";

const deps = [CommonModule];
const shared = [];
const reExports = [MaterialModule];

@NgModule({
	declarations: [].concat(shared),
	imports: [].concat(deps, reExports),
	exports: [].concat(shared, reExports)
})
export class SharedModule {}
