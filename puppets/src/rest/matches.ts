import { Match, MatchPayload } from "../models/match.model";
import { map, tap } from "rxjs/operators";

import { CsrfService } from "./csrf";
import { Observable } from "rxjs";
import { PaginatedList } from "../models/results.model";
import { RxHR } from "@akanass/rx-http-request";

export class MatchesService {
	url = "http://localhost:8000/api/matches/";

	constructor() {}

	countMatches(): Observable<number> {
		return RxHR.get(this.url).pipe(
			map(x => JSON.parse(x.body)),
			map((resultsList: PaginatedList<Match>) => resultsList.count)
		);
	}

	listMatches(limit?: number, offset?: number): Observable<Match[]> {
		const paginatedUrl = this.url.concat(this.paginationBuilder(limit, offset));
		return RxHR.get(paginatedUrl).pipe(
			map(x => JSON.parse(x.body)),
			map((resultsList: PaginatedList<Match>) => resultsList.results)
		);
	}

	createMatch(
		matchPayload: MatchPayload,
		document: Document
	): Observable<Match> {
		const csrfService = new CsrfService();
		const options = {
			headers: csrfService.jsonPostHeaders(document),
			payload: matchPayload
		};
		return RxHR.post(this.url, options).pipe(map(x => JSON.parse(x.body)));
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
