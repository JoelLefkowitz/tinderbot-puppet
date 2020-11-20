import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeRoutingModule } from "./home-routing.module";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
	declarations: [DashboardComponent],
	imports: [CommonModule, HomeRoutingModule, SharedModule]
})
export class HomeModule {}
