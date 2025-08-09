import { WhySpecialPoint, WhySpecialSectionData } from '../types/sections';
import { WHY_SPECIAL_POINTS } from '../utils/constants';
import { SectionHeadersService } from './SectionHeadersService';
import { StatsService } from './StatsService';

export class WhySpecialService {
  static getAllWhySpecialPoints(): WhySpecialPoint[] {
    return WHY_SPECIAL_POINTS;
  }

  static getData(): WhySpecialSectionData {
    const header = SectionHeadersService.getHeader('whySpecial');
    const whySpecialPoints = WhySpecialService.getAllWhySpecialPoints();
    const stats = StatsService.getAllStats();
    
    return {
      header,
      whySpecialPoints,
      stats,
    };
  }

  static validateWhySpecialPointIndex(index: number): boolean {
    return index >= 0 && index < WHY_SPECIAL_POINTS.length;
  }

  static getWhySpecialPointsCount(): number {
    return WHY_SPECIAL_POINTS.length;
  }

  static getWhySpecialPointByIndex(index: number): WhySpecialPoint | undefined {
    return WHY_SPECIAL_POINTS[index];
  }
}