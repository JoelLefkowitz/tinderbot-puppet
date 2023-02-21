import { Match, MatchPayload } from "../models/match.model";

import { Observable } from "rxjs";
import { PaginatedList } from "../models/paginated.model";
import { RxHR } from "@akanass/rx-http-request";
import { injectable } from "tsyringe";
import { map } from "rxjs/operators";

@injectable()
export class MatchesService {
  url: string;

  constructor() {
    const host = process.env.remoteHost ?? "0.0.0.0";
    const port = process.env.remoteServerPort ?? "8000";
    this.url = `http://${host}:${port}/api/matches"`;
  }

  protected static paginate(limit?: number, offset?: number): string {
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

  count(): Observable<number> {
    return RxHR.get<string>(this.url).pipe(
      map(({ body }) => {
        const matches = JSON.parse(body) as PaginatedList<Match>;
        return matches.count;
      })
    );
  }

  list(limit?: number, offset?: number): Observable<Match[]> {
    return RxHR.get<string>(
      this.url.concat(MatchesService.paginate(limit, offset))
    ).pipe(
      map(({ body }) => {
        const matches = JSON.parse(body) as PaginatedList<Match>;
        return matches.results;
      })
    );
  }

  create(match: MatchPayload, csrf: string): Observable<Match> {
    return RxHR.post<Match>(this.url, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrf,
      },
      body: match,
      json: true,
    }).pipe(map(({ body }) => body));
  }
}
