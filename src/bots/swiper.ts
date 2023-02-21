import { Bot } from "../models/bots.model";
import { BrowserService } from "../services/browser";
import { Page } from "puppeteer";
import { injectable } from "tsyringe";

@injectable()
export class Swiper implements Bot {
  url: string;

  protected selectors = {
    matchPopup:
      // cspell:disable-next-line
      "#modal-manager-canvas > div > div > div.M\\(a\\).Expand.Pos\\(r\\).Fx\\(\\$flx1\\).Pb\\(36px\\)--ml.Maw\\(375px\\)--ml.Mah\\(620px\\)--ml > div > div.Expand.Pos\\(a\\).Z\\(0\\).Bdrs\\(4px\\).Ov\\(h\\) > div > div.Expand.Pos\\(a\\).D\\(f\\).Ov\\(h\\).Us\\(n\\).keen-slider > span:nth-child(1) > div",
    matchPopupCloseButton:
      // cspell:disable-next-line
      "#modal-manager-canvas > div > div > div.M\\(a\\).Expand.Pos\\(r\\).Fx\\(\\$flx1\\).Pb\\(36px\\)--ml.Maw\\(375px\\)--ml.Mah\\(620px\\)--ml > div > div.Expand.Pos\\(a\\).Z\\(0\\).Bdrs\\(4px\\).Ov\\(h\\) > div > div.Expand.Pos\\(a\\).D\\(f\\).Ov\\(h\\).Us\\(n\\).keen-slider > span:nth-child(1) > div",

    advicePopup: "#modal-manager > div > div",
    advicePopupCloseButton:
      // cspell:disable-next-line
      "#modal-manager > div > div > button.button.Lts\\(\\$ls-s\\).Z\\(0\\).CenterAlign.Mx\\(a\\).Cur\\(p\\).Tt\\(u\\).Ell.Bdrs\\(100px\\).Px\\(24px\\).Px\\(20px\\)--s.Py\\(0\\).Mih\\(40px\\).Fw\\(\\$semibold\\).focus-button-style.D\\(b\\).My\\(20px\\).Mx\\(a\\)",

    homescreenPromptPopup: "#modal-manager > div > div > div.Pt",
    homescreenPromptPopupCloseButton:
      // cspell:disable-next-line
      "#modal-manager > div > div > div.Pt\\(12px\\).Pb\\(8px\\).Px\\(36px\\).Px\\(24px\\)--s > button.button.Lts\\(\\$ls-s\\).Z\\(0\\).CenterAlign.Mx\\(a\\).Cur\\(p\\).Tt\\(u\\).Ell.Bdrs\\(100px\\).Px\\(24px\\).Px\\(20px\\)--s.Py\\(0\\).Mih\\(42px\\)--s.Mih\\(50px\\)--ml.C\\(\\$c-secondary\\).C\\(\\$c-base\\)\\:h.Fw\\(\\$semibold\\).focus-button-style.D\\(b\\).Mx\\(a\\)",

    likeButton:
      "#content > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.recsCardboard.W\\(100\\%\\).Mt\\(a\\).H\\(100\\%\\)--s.Px\\(4px\\)--s.Pos\\(r\\) > div > div.Pos\\(r\\).Py\\(16px\\).Py\\(12px\\)--s.Px\\(4px\\).Px\\(8px\\)--ml.D\\(f\\).Jc\\(sb\\).Ai\\(c\\).Maw\\(375px\\)--m.Mx\\(a\\).Pe\\(n\\).Mt\\(-1px\\) > div:nth-child(4) > button",
  };

  constructor(private browserService: BrowserService) {
    const domain = "https://tinder.com";
    const endpoint = "/app/recs";
    this.url = `${domain}${endpoint}`;
  }

  async loop(): Promise<void> {
    const browser = await this.browserService.browser();
    const page = await browser.newPage();

    await page.goto(this.url, { waitUntil: "networkidle0" });

    for (;;) {
      // eslint-disable-next-line no-await-in-loop
      await this.swipe(page);
    }
  }

  async swipe(page: Page): Promise<void> {
    await page.waitForSelector(this.selectors.likeButton);
    await page.click(this.selectors.likeButton);

    if (await page.$(this.selectors.matchPopup)) {
      await page.click(this.selectors.matchPopupCloseButton);
    }
    if (await page.$(this.selectors.advicePopup)) {
      await page.click(this.selectors.advicePopupCloseButton);
    }
    if (await page.$(this.selectors.homescreenPromptPopup)) {
      await page.click(this.selectors.homescreenPromptPopupCloseButton);
    }
  }
}
