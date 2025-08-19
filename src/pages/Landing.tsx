import React from 'react';
import Hero from '../core/components/sections/Hero';
// import Features from '../components/sections/Features';
import ProblemSolution from '../core/components/sections/ProblemSolution';
import WhySpecial from '../core/components/sections/WhySpecial';
import CourseProgram from '../core/components/sections/CourseProgram';
// import PathToSuccess from '../components/sections/PathToSuccess';
// import SuccessStories from '../components/sections/SuccessStories';
import FAQ from '../core/components/sections/FAQ';
import PricingPlans from '../core/components/sections/PricingPlans';
import SEOHead from '../core/components/common/SEOHead';
import { useSEO } from '../core/hooks/useSEO';

const Landing: React.FC = () => {
  const seoConfig = useSEO('home');

  return (
    <>
      <SEOHead {...seoConfig} />
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