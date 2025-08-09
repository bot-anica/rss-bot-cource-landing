import { Feature, FeaturesSectionData } from '../types/sections';
import { FEATURES } from '../utils/constants';
import { SectionHeadersService } from './SectionHeadersService';

export class FeaturesService {
  static getAllFeatures(): Feature[] {
    return FEATURES;
  }

  static getData(): FeaturesSectionData {
    const header = SectionHeadersService.getHeader('features');
    const features = FeaturesService.getAllFeatures();

    return {
      header,
      features,
    }
  }

  static getFeatureByIndex(index: number): Feature | undefined {
    return FEATURES[index];
  }

  static getFeaturesCount(): number {
    return FEATURES.length;
  }

  static validateFeatureIndex(index: number): boolean {
    return index >= 0 && index < FEATURES.length;
  }
} 