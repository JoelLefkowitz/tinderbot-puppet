import { Match, MatchPayload } from "../models/Match.model";
import { Observable } from "rxjs";
import { PaginatedList } from "../models/PaginatedList.model";
import { RxHR as http } from "@akanass/rx-http-request";
import { injectable } from "tsyringe";
import { map } from "rxjs/operators";
import { paginate } from "./pagination";

@injectable()
export class MatchesService {
  url: string;

  constructor() {
    const host = process.env.remoteHost ?? "0.0.0.0";
    const port = process.env.remoteServerPort ?? "8000";
    this.url = `http://${host}:${port}/api/matches"`;
  }

  count(): Observable<number> {
    return http.get<string>(this.url).pipe(
      map(({ body }) => {
        const matches = JSON.parse(body) as PaginatedList<Match>;
        return matches.count;
      }),
    );
  }

  list(limit?: number, offset?: number): Observable<Match[]> {
    return http.get<string>(this.url.concat(paginate(limit, offset))).pipe(
      map(({ body }) => {
        const matches = JSON.parse(body) as PaginatedList<Match>;
        return matches.results;
      }),
    );
  }

  create(match: MatchPayload, csrf: string): Observable<Match> {
    return http
      .post<Match>(this.url, {
        headers: { "Content-Type": "application/json", "X-CSRFToken": csrf },
        body: match,
        json: true,
      })
      .pipe(map(({ body }) => body));
  }
}
