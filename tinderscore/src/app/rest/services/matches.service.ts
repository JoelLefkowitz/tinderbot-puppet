import { Match, MatchPayload } from "../models/match.model";

import { CsrfService } from "./csrf.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PaginatedList } from "../models/results.model";
import { map } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class MatchesService {
	baseUrl = "api/matches/";
	constructor(private http: HttpClient, private csrfService: CsrfService) {}

	createMatch(matchPayload: MatchPayload): Observable<Match> {
		const options = { headers: this.csrfService.jsonPostHeaders() };
		return this.http.post<Match>(this.baseUrl, matchPayload, options);
	}

	countMatches(): Observable<number> {
		return this.http
			.get(this.baseUrl)
			.pipe(map((resultsList: PaginatedList<Match>) => resultsList.count));
	}

	listMatches(limit?: number, offset?: number): Observable<Match[]> {
		const paginatedUrl = this.baseUrl.concat(
			this.paginationBuilder(limit, offset)
		);
		return this.http
			.get(paginatedUrl)
			.pipe(map((resultsList: PaginatedList<Match>) => resultsList.results));
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
