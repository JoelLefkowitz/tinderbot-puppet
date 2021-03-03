import { Swiper } from "./bots/swiper";
import "reflect-metadata";
import { container } from "tsyringe";

export async function main() {
  const swiper = container.resolve(Swiper);
  await swiper.mainLoop();
}
