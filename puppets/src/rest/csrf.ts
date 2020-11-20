import { HttpHeaders } from "../models/headers.model";

export class CsrfService {
	constructor() {}

	jsonPostHeaders(document: Document): HttpHeaders {
		const csrfRegex = new RegExp("(^| )csrftoken=([^;]+)")
		const matches = document.cookie.match(csrfRegex);
		return {
			"Content-Type": "application/json",
			"X-CSRFToken": matches ? matches[2] : ""
		};
	}
}
