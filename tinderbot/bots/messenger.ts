import { Bot } from "../models/bots.model";
import { BrowserService } from "../clients/browser";
import { injectable } from "tsyringe";

@injectable()
export class Messenger implements Bot {
	botUrl: string;

	selectors = {
		matchesTab: "#match-tab",
		messagesTab: "#messages-tab",
		firstNewMatch:
			"#matchListNoMessages > div:nth-child(1) > div:nth-child(3) > a > div.recCard__img.StretchedBox.Bdrs\\(4px\\).Ov\\(h\\).H\\(100\\%\\).Pos\\(r\\).Bgc\\(\\$c-placeholder\\) > div",
		firstNewMatchName:
			"#matchListNoMessages > div:nth-child(1) > div:nth-child(3) > a > span > div > div.Ell",
		chatText: "#chat-text-area",
		chatSend:
			"#content > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div > div.Fx\\(\\$flx1\\).H\\(100\\%\\) > div > div > div.D\\(f\\).W\\(100\\%\\).BdT.Bdtc\\(\\$c-divider\\).Bgc\\(\\#fff\\).Pos\\(r\\) > form > button"
	};

	constructor(private browserService: BrowserService) {
		const domain = "https://tinder.com";
		const endpoint = "/app/recs";
		this.botUrl = `${domain}${endpoint}`;
	}

	async mainLoop(): Promise<void> {
		const browser = await this.browserService.setUp();

		while (true) {
			const page = await browser.newPage();
			await page.goto(this.botUrl, { waitUntil: "networkidle0" });

			await page.waitForSelector(this.selectors.matchesTab);
			await page.click(this.selectors.matchesTab);

			await page.waitForSelector(this.selectors.firstNewMatch);
			await page.waitForSelector(this.selectors.firstNewMatchName);
			let matchName = await page.evaluate(
				x => x.textContent,
				await page.$(this.selectors.firstNewMatchName)
			);

			await page.click(this.selectors.firstNewMatch);
			let messages = this.introMessages(matchName);

			for (let message of messages) {
				await page.waitForSelector(this.selectors.chatText);
				await page.focus(this.selectors.chatText);
				await page.keyboard.type(message);
				await page.waitForSelector(this.selectors.chatSend);
				await page.click(this.selectors.chatSend);
			}
			
			await page.close();
		}
	}

	introMessages(name: string): string[] {
		return [
			`You have such lovely skin ${name} 😘`,
			"Wanna meet in person and get drinks?"
		];
	}
}

function timeout(ms: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, ms));
}
