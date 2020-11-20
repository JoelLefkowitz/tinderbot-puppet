import { CookieService } from "ngx-cookie-service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NgModule } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";

const reExports = [
	HttpClientTestingModule,
	RouterTestingModule,
	NoopAnimationsModule
];

@NgModule({
	declarations: [],
	providers: [CookieService],
	imports: [].concat(reExports),
	exports: [].concat(reExports)
})
export class TestingModule {}
