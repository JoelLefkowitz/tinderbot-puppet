import { Bot } from "../models/bots.model";
import { BrowserService } from "../clients/browser";
import { MatchPayload } from "../models/match.model";
import { MatchesService } from "../clients/matches";
import { getEnv } from "../utils/env";
import { injectable } from "tsyringe";

@injectable()
export class Reporter implements Bot {
	botUrl: string;

	constructor(
		private browserService: BrowserService,
		private matchesService: MatchesService
	) {
		const host = getEnv("remoteHost", "0.0.0.0");
		const port = getEnv("remoteServerPort", "8000");
		const endpoint = "/api/matches/";
		this.botUrl = `http://${host}:${port}${endpoint}"`;
	}

	async mainLoop(): Promise<void> {
		const browser = await this.browserService.setUp();
		const page = await browser.newPage();
		await page.goto(this.botUrl, { waitUntil: "networkidle0" });
	}

	async createMatch(page: any, matchPayload: MatchPayload): Promise<void> {
		const cookies = await page.cookies();
		const matchingToken = cookies.find((x: any) => x.name === "csrftoken");
		const csrfToken = matchingToken ? matchingToken.value : "";
		await this.matchesService.createMatch(matchPayload, csrfToken);
	}
}
