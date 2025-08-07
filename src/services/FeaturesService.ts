import { FEATURES } from '../utils/constants';

export interface Feature {
  icon: any;
  color: string;
  title: string;
  description: string;
  bullets: string[];
}

export class FeaturesService {
  static getAllFeatures(): Feature[] {
    return FEATURES;
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