const puppeteer = require("puppeteer");

import { MatchesService } from "./rest/matches";
import { injectable } from "tsyringe";
import { mockMatch } from "./models/match.model";

const selectors = {
	matchPopup:
		"#modal-manager-canvas > div > div > div.M\\(a\\).Expand.Pos\\(r\\).Fx\\(\\$flx1\\).Pb\\(36px\\)--ml.Maw\\(375px\\)--ml.Mah\\(620px\\)--ml > div > div.Expand.Pos\\(a\\).Z\\(0\\).Bdrs\\(4px\\).Ov\\(h\\) > div > div.Expand.Pos\\(a\\).D\\(f\\).Ov\\(h\\).Us\\(n\\).keen-slider > span:nth-child(1) > div",
	matchPopupCloseButton:
		"#modal-manager-canvas > div > div > div.M\\(a\\).Expand.Pos\\(r\\).Fx\\(\\$flx1\\).Pb\\(36px\\)--ml.Maw\\(375px\\)--ml.Mah\\(620px\\)--ml > div > div.Expand.Pos\\(a\\).Z\\(0\\).Bdrs\\(4px\\).Ov\\(h\\) > div > div.Expand.Pos\\(a\\).D\\(f\\).Ov\\(h\\).Us\\(n\\).keen-slider > span:nth-child(1) > div",
	advicePopup: "#modal-manager > div > div",
	advicePopupCloseButton:
		"#modal-manager-canvas > div > div > div.M\\(a\\).Expand.Pos\\(r\\).Fx\\(\\$flx1\\).Pb\\(36px\\)--ml.Maw\\(375px\\)--ml.Mah\\(620px\\)--ml > div > div.Pos\\(a\\).T\\(0\\).P\\(20px\\).P\\(12px\\)--xs.End\\(0\\) > button > svg",
	likeButton:
		"#content > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.recsCardboard.W\\(100\\%\\).Mt\\(a\\).H\\(100\\%\\)--s.Px\\(4px\\)--s.Pos\\(r\\) > div > div.Pos\\(r\\).Py\\(16px\\).Py\\(12px\\)--s.Px\\(4px\\).Px\\(8px\\)--ml.D\\(f\\).Jc\\(sb\\).Ai\\(c\\).Maw\\(375px\\)--m.Mx\\(a\\).Pe\\(n\\).Mt\\(-1px\\) > div:nth-child(4) > button"
};

@injectable()
export class Bot {
	browser: any;

	chromeUrl = "http://127.0.0.1:9222";
	tinderUrl = "https://tinder.com/app/recs";
	serverUrl = "http://localhost:8000/api/matches";

	constructor(private matchesService: MatchesService) {}

	async setUp(): Promise<void> {
		this.browser = await puppeteer.connect({ browserURL: this.chromeUrl });
	}

	async handlePopups(page: any): Promise<void> {
		console.log("handlingPopups");
		if (await page.$(selectors.matchPopup)) {
			await page.click(selectors.matchPopupCloseButton);
		}
		if (await page.$(selectors.advicePopup)) {
			await page.click(selectors.advicePopupCloseButton);
		}
	}

	async run() {
		const page = await this.browser.newPage();
		await page.goto(this.tinderUrl, { waitUntil: "networkidle0" });

		while (true) {
			await page.waitForSelector(selectors.likeButton);
			await page.click(selectors.likeButton);
			await this.handlePopups(page);
		}
	}

	async tearDown(): Promise<void> {
		await this.browser.close();
	}

	async createMatch(): Promise<void> {
		const csrfToken = await this.getServerCsrfToken();
		await this.matchesService.createMatch(mockMatch, csrfToken);
	}

	async getServerCsrfToken(): Promise<string> {
		let page = await this.browser.newPage();
		page = await page.goto(this.serverUrl);
		const cookies = await page.cookies();
		const csrfToken = cookies.find((x: any) => x.name === "csrftoken");
		return csrfToken ? csrfToken.value : "";
	}
}
