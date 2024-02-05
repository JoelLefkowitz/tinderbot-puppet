import { Bot } from "../models/bots.model";
import { BrowserService } from "../services/browser";
import { injectable } from "tsyringe";

@injectable()
export class Messenger implements Bot {
  url = "https://tinder.com/app/recs";

  protected selectors = {
    matchesTab: "#match-tab",
    messagesTab: "#messages-tab",
    firstNewMatch:
      // cspell:disable-next-line
      "#matchListNoMessages > div:nth-child(1) > div:nth-child(3) > a > div.recCard__img.StretchedBox.Bdrs\\(4px\\).Ov\\(h\\).H\\(100\\%\\).Pos\\(r\\).Bgc\\(\\$c-placeholder\\) > div",
    firstNewMatchName:
      "#matchListNoMessages > div:nth-child(1) > div:nth-child(3) > a > span > div > div.Ell",
    chatText: "#chat-text-area",
    chatSend:
      // cspell:disable-next-line
      "#content > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div > div.Fx\\(\\$flx1\\).H\\(100\\%\\) > div > div > div.D\\(f\\).W\\(100\\%\\).BdT.Bdtc\\(\\$c-divider\\).Bgc\\(\\#fff\\).Pos\\(r\\) > form > button",
  };

  constructor(private browser: BrowserService) {}

  async loop(): Promise<void> {
    for (;;) {
      // eslint-disable-next-line no-await-in-loop
      await this.message();
    }
  }

  async message(): Promise<void> {
    const browser = await this.browser.browser();

    const page = await browser.newPage();
    await page.goto(this.url, { waitUntil: "networkidle0" });

    await page.waitForSelector(this.selectors.matchesTab);
    await page.click(this.selectors.matchesTab);

    await page.waitForSelector(this.selectors.firstNewMatch);
    await page.waitForSelector(this.selectors.firstNewMatchName);

    await page.click(this.selectors.firstNewMatch);

    await page.waitForSelector(this.selectors.chatText);
    await page.focus(this.selectors.chatText);
    await page.keyboard.type("Wanna meet in person and get drinks?");
    await page.waitForSelector(this.selectors.chatSend);
    await page.click(this.selectors.chatSend);

    await page.close();
  }
}
