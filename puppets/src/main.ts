import "reflect-metadata";

import { Bot } from "./bots";
import { container } from "tsyringe";

(async (bot: Bot) => {
	await bot.setUp();
	await bot.run();
	await bot.tearDown();
})(container.resolve(Bot));
