import { MatchesService } from "./rest/matches";

const puppeteer = require("puppeteer");

const serverUrl = "http://localhost:8000/api/matches";

class Bot {
	matchesService: MatchesService;

	constructor() {
		this.matchesService = new MatchesService();
	}

	async run() {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(serverUrl);

		const matchesPayload = { firstName: "", lastName: "" };
		await page.evaluate(() =>
			this.matchesService.createMatch(matchesPayload, document).toPromise()
		);

		await browser.close();
	}
}

const bot = new Bot();
bot.run();
