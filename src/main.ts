import "reflect-metadata";
import { Swiper } from "./bots/swiper";
import { container } from "tsyringe";

const swiper = container.resolve(Swiper);
swiper.loop().catch(console.error);
