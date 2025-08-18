import { FooterData, LinkItem } from '../types/sections';
import { COURSE_DESCRIPTION, FOOTER_NAVIAGTION_LINKS } from '../utils/constants';

export class FooterService {
  static getCourseDescription(): string {
    return COURSE_DESCRIPTION;
  }

  static getNavigationLinks(): LinkItem[] {
    return FOOTER_NAVIAGTION_LINKS;
  }

  static getData(): FooterData {
    const courseDescription = FooterService.getCourseDescription();
    const navigationLinks = FooterService.getNavigationLinks();

    return { courseDescription, navigationLinks }
  }
} 