import { SectionHeaderProps } from "../types/sections";
import { SECTION_HEADERS } from "../constants/constants";

export class SectionHeadersService {
  static getHeader(section: keyof typeof SECTION_HEADERS): SectionHeaderProps {
    return SECTION_HEADERS[section];
  }
}