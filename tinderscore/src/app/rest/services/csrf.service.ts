import { CookieService } from "ngx-cookie-service";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class CsrfService {
	constructor(private cookieService: CookieService) {}

	getToken(): string {
		const csrf = this.cookieService.get("csrftoken");
		return csrf ? csrf : "";
	}

	jsonPostHeaders(): HttpHeaders {
		return new HttpHeaders({
			"Content-Type": "application/json",
			"X-CSRFToken": this.getToken()
		});
	}
}
