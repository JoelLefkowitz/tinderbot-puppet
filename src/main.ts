import "reflect-metadata";

import { Swiper } from "./bots/swiper";
import { container } from "tsyringe";

(async () => {
  const swiper = container.resolve(Swiper);
  await swiper.loop();
})();
