import { Match, MatchPayload } from "../models/match.model";

import { HttpHeaders } from "../models/headers.model";
import { Observable } from "rxjs";
import { PaginatedList } from "../models/paginated.model";
import { RxHR } from "@akanass/rx-http-request";
import { Service } from "../models/services.model";
import { getEnv } from "../utils/env";
import { injectable } from "tsyringe";
import { map } from "rxjs/operators";

@injectable()
export class MatchesService implements Service {
	serviceUrl: string;

	constructor() {
		const host = getEnv("remoteHost", "0.0.0.0");
		const port = getEnv("remoteServerPort", "8000");
		const endpoint = "/api/matches/";
		this.serviceUrl = `http://${host}:${port}${endpoint}"`;
	}

	countMatches(): Observable<number> {
		return RxHR.get(this.serviceUrl).pipe(
			map(x => JSON.parse(x.body)),
			map((resultsList: PaginatedList<Match>) => resultsList.count)
		);
	}

	listMatches(limit?: number, offset?: number): Observable<Match[]> {
		const paginatedUrl = this.serviceUrl.concat(
			this.paginationBuilder(limit, offset)
		);
		return RxHR.get(paginatedUrl).pipe(
			map(x => JSON.parse(x.body)),
			map((resultsList: PaginatedList<Match>) => resultsList.results)
		);
	}

	createMatch(
		matchPayload: MatchPayload,
		csrfToken: string
	): Observable<Match> {
		const options = {
			headers: this.postHeaders(csrfToken),
			body: matchPayload,
			json: true
		};
		return RxHR.post(this.serviceUrl, options).pipe(map(x => x.body));
	}

	postHeaders(csrfToken: string): HttpHeaders {
		return {
			"Content-Type": "application/json",
			"X-CSRFToken": csrfToken
		};
	}

	paginationBuilder(limit?: number, offset?: number): string {
		if (limit && offset) {
			return `?limit=${limit}&offset=${offset}`;
		}

		if (limit) {
			return `?limit=${limit}`;
		}

		if (offset) {
			return `?offset=${offset}`;
		}

		return "";
	}
}
