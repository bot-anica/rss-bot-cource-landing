import React, { lazy } from 'react';
import Hero from '../core/components/pages/landing/Hero';
import SEOHead from '../core/components/common/SEOHead';
import { useSEO } from '../core/hooks/useSEO';
import LazyLoadSection from '../core/components/common/LazyLoadSection';

const ProblemSolution = lazy(() => import('../core/components/pages/landing/ProblemSolution'));
const WhySpecial = lazy(() => import('../core/components/pages/landing/WhySpecial'));
const CourseProgram = lazy(() => import('../core/components/pages/landing/CourseProgram'));
const PricingPlans = lazy(() => import('../core/components/pages/landing/PricingPlans'));
const FAQ = lazy(() => import('../core/components/pages/landing/FAQ'));

const Landing: React.FC = () => {
  const seoConfig = useSEO('home');

  return (
    <>
      {seoConfig && <SEOHead {...seoConfig} />}
      <Hero />
      <LazyLoadSection fallback={<div />}>
        <ProblemSolution />
      </LazyLoadSection>
      {/* <Features /> */}
      <LazyLoadSection fallback={<div />}>
        <WhySpecial />
      </LazyLoadSection>
      <LazyLoadSection fallback={<div />}>
        <CourseProgram />
      </LazyLoadSection>
      {/* <PathToSuccess /> */}
      {/* <SuccessStories /> */}
      <LazyLoadSection fallback={<div />}>
        <PricingPlans />
      </LazyLoadSection>
      <LazyLoadSection fallback={<div />}>
        <FAQ />
      </LazyLoadSection>
    </>
  );
};

export default Landing;
