const puppeteer = require("puppeteer");

import { Logger } from "./logger";
import { Service } from "../models/services.model";
import { getEnv } from "../utils/env";
import { injectable } from "tsyringe";

@injectable()
export class BrowserService implements Service {
	bowserState: any;
	serviceUrl: string;

	constructor(private logger: Logger) {
		const host = getEnv("remoteHost", "0.0.0.0");
		const port = getEnv("remoteBrowserPort", "9222");
		const endpoint = "";
		this.serviceUrl = `http://${host}:${port}${endpoint}`;
	}

	async setUp(): Promise<any> {
		this.bowserState = await puppeteer.connect({ browserURL: this.serviceUrl });
		this.logger.connectionSuccessful();
		return this.bowserState;
	}

	async tearDown(): Promise<void> {
		await this.bowserState.close();
	}
}
