import { ButtonVariant, ButtonSize, ButtonIconPosition } from "./common";

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

export interface CTAItem {
  text: string;
  link: string;
  buttonVariant: ButtonVariant;
  buttonSize: ButtonSize;
  buttonIcon?: any;
  buttonIconColor?: string;
  buttonIconPosition?: ButtonIconPosition;
}

export interface HeroTitle {
  main: string;
  highlight: string;
  additional: string;
}

export interface HeroData {
  title: HeroTitle;
  subtitle: string;
  benefits: string[];
  cta: {
    primary: CTAItem;
    secondary: CTAItem;
  };
}

export interface PathToSuccessStep {
  id: number;
  title: string;
  description: string;
  result: string;
}

export type PathToSuccessImages = Record<string, string>

export interface PathToSuccessData {
  header: SectionHeaderProps;
  steps: PathToSuccessStep[];
  images: PathToSuccessImages;
}

export interface ProblemSolutionItem {
  problem: string;
  solution: string;
  icon: any;
}

export interface ProblemSolutionCTABlock {
  title: string;
  subtitle: string;
  cta: CTAItem;
}

export interface ProblemSolutionData {
  header: SectionHeaderProps;
  items: ProblemSolutionItem[];
  ctaBlock: ProblemSolutionCTABlock;
}

export interface Statistic {
  icon: any;
  iconColor: string;
  number: string;
  label: string;
}

export interface Testimonial {
  icon: any;
  iconColor: string;
  name: string;
  role: string;
  quote: string;
  achievement: string;
}

export interface SuccessStoriesCTABlock {
  text: string;
  description: string;
  icon: any;
  iconColor: string;
}

export interface SuccessStoriesData {
  header: SectionHeaderProps;
  stats: Statistic[];
  testimonials: Testimonial[];
  ctaBlock: SuccessStoriesCTABlock;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  result: string;
  icon: any;
}

export interface CourseProgramData {
  header: SectionHeaderProps;
  lessons: Lesson[];
  breakpoints: any;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  header: SectionHeaderProps;
  faqs: FAQItem[];
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  tagline: string;
  icon: React.ComponentType<any>;
  features: string[];
  buttonText: string;
  buttonStyle: ButtonVariant;
  popular: boolean;
  originalPrice?: string;
}

export interface PricingSectionData {
  header: SectionHeaderProps;
  plans: PricingPlan[];
}