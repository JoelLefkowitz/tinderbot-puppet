import "reflect-metadata";

import { Swiper } from "./bots/swiper";
import { container } from "tsyringe";

export async function main() {
	const swiper = container.resolve(Swiper);
	await swiper.mainLoop();
}
