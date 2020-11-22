import { CommonModule } from "@angular/common";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgModule } from "@angular/core";

const deps = [CommonModule];
const reExports = [MatToolbarModule, MatPaginatorModule, MatTableModule];

@NgModule({
	declarations: [],
	imports: [].concat(deps, reExports),
	exports: [].concat(reExports)
})
export class MaterialModule {}
