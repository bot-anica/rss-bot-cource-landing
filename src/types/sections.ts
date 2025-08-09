export interface Stat {
  number: string;
  label: string;
}

export interface WhySpecialPoint {
  icon: any;
  color: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface WhySpecialSectionData {
  header: SectionHeaderProps,
  whySpecialPoints: WhySpecialPoint[];
  stats: Stat[];
}

export interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export interface Feature {
  icon: any,
  iconColor: string,
  title: string,
  subtitle: string,
  description: string,
}

export interface FeaturesSectionData {
  header: SectionHeaderProps,
  features: Feature[];
}