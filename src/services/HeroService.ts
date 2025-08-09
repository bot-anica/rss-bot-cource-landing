import { HeroData } from "../types/sections";
import { HERO } from "../utils/constants";

export class HeroService {
  static getHeroData(): HeroData {
    return HERO;
  }
}