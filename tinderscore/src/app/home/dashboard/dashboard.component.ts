import { Component, OnInit } from "@angular/core";

import { Match } from "src/app/rest/models/match.model";
import { MatchesService } from "src/app/rest/services/matches.service";
import { Observable } from "rxjs";
import { PageEvent } from "@angular/material/paginator";
import { PollingService } from "src/app/rest/services/polling.service";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
	pollInterval = 1000;
	defaultPageSize = 10;
	pageSizeOptions = [10, 50, 100];

	matches: Observable<Match[]>;
	matchesCount: Observable<number>;

	tableColumns = ["id", "created", "firstName", "lastName"];

	constructor(
		private matchesService: MatchesService,
		private pollingService: PollingService
	) {}

	ngOnInit(): void {
		this.pollMatchesCount();
		this.pollMatches(this.defaultPageSize, 0);
	}

	pollMatchesCount() {
		this.matchesCount = this.pollingService.poll(
			this.pollInterval,
			this.matchesService.countMatches()
		);
	}

	pollMatches(limit: number, offset: number): void {
		this.matches = this.pollingService.poll(
			this.pollInterval,
			this.matchesService.listMatches(limit, offset)
		);
	}

	updatePagination($event: PageEvent): void {
		const limit = $event.pageSize;
		const offset = limit * $event.pageIndex;
		this.pollMatches(limit, offset);
	}

	formatISODate(isoString: string) {
		return new Date(isoString).toLocaleString();
	}
}
