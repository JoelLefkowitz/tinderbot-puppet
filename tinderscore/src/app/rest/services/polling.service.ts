import { Observable, timer } from "rxjs";

import { Injectable } from "@angular/core";
import { switchMap } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class PollingService {
	constructor() {}

	poll<T>(interval: number, observable: Observable<T>): Observable<T> {
		return timer(0, interval).pipe(switchMap(_ => observable));
	}
}
