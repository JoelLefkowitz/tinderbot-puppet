import { injectable } from "tsyringe";
import puppeteer, { Browser } from "puppeteer";

@injectable()
export class BrowserService {
  url: string;

  private open?: Browser;

  constructor() {
    const host = process.env.remoteHost ?? "0.0.0.0";
    const port = process.env.remoteBrowserPort ?? "9222";
    this.url = `http://${host}:${port}`;
  }

  async browser(): Promise<Browser> {
    if (!this.open) {
      this.open = await puppeteer.connect({ browserURL: this.url });
      console.log("🌈 Successfully started running in your browser! 🌈");
    }

    return this.open;
  }

  async tearDown(): Promise<void> {
    await this.open?.close();
  }
}
