import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgModule } from "@angular/core";

const deps = [CommonModule];
const reExports = [MatToolbarModule];

@NgModule({
	declarations: [],
	imports: [].concat(deps, reExports),
	exports: [].concat(reExports)
})
export class MaterialModule {}
