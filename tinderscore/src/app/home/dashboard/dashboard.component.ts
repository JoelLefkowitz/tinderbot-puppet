import { Component, OnInit } from "@angular/core";

import { MatchesService } from "src/app/rest/services/matches.service";
import { Observable } from "rxjs";
import { PollingService } from "src/app/rest/services/polling.service";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
	matchesCount: Observable<number>;

	constructor(
		private matchesService: MatchesService,
		private pollingService: PollingService
	) {}

	ngOnInit(): void {
		this.matchesCount = this.pollingService.poll(
			1000,
			this.matchesService.countMatches()
		);
	}
}
