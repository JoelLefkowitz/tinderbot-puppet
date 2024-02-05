import { Bot } from "../models/bots.model";
import { BrowserService } from "../services/browser";
import { MatchPayload } from "../models/match.model";
import { MatchesService } from "../services/matches";
import { Page } from "puppeteer";
import { firstValueFrom } from "rxjs";
import { injectable } from "tsyringe";

@injectable()
export class Reporter implements Bot {
  url: string;

  constructor(
    private browser: BrowserService,
    private matches: MatchesService,
  ) {
    const host = process.env.remoteHost ?? "0.0.0.0";
    const port = process.env.remoteServerPort ?? "8000";
    this.url = `http://${host}:${port}/api/matches"`;
  }

  async loop(): Promise<void> {
    const browser = await this.browser.browser();
    const page = await browser.newPage();
    await page.goto(this.url, { waitUntil: "networkidle0" });
  }

  async createMatch(page: Page, matchPayload: MatchPayload): Promise<void> {
    const cookies = await page.cookies();
    const matchingToken = cookies.find(({ name }) => name === "csrftoken");
    const csrfToken = matchingToken ? matchingToken.value : "";
    await firstValueFrom(this.matches.create(matchPayload, csrfToken));
  }
}
