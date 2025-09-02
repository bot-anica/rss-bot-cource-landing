import React from 'react';
import Hero from '../core/components/pages/landing/Hero';
// import Features from '../components/sections/Features';
import ProblemSolution from '../core/components/pages/landing/ProblemSolution';
import WhySpecial from '../core/components/pages/landing/WhySpecial';
import CourseProgram from '../core/components/pages/landing/CourseProgram';
// import PathToSuccess from '../components/sections/PathToSuccess';
// import SuccessStories from '../components/sections/SuccessStories';
import FAQ from '../core/components/pages/landing/FAQ';
import PricingPlans from '../core/components/pages/landing/PricingPlans';
import SEOHead from '../core/components/common/SEOHead';
import { useSEO } from '../core/hooks/useSEO';

const Landing: React.FC = () => {
  const seoConfig = useSEO('home');

  return (
    <>
      {seoConfig && <SEOHead {...seoConfig} />}
      <main>
        <Hero />
        <ProblemSolution />
        {/* <Features /> */}
        <WhySpecial />
        <CourseProgram />
        {/* <PathToSuccess /> */}
        {/* <SuccessStories /> */}
        <PricingPlans />
        <FAQ />
      </main>
    </>
  );
};

export default Landing;