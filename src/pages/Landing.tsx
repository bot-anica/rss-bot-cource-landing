import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import ProblemSolution from '../components/sections/ProblemSolution';
import WhySpecial from '../components/sections/WhySpecial';
import CourseProgram from '../components/sections/CourseProgram';
import PathToSuccess from '../components/sections/PathToSuccess';
import SuccessStories from '../components/sections/SuccessStories';
import FAQ from '../components/sections/FAQ';
import PricingPlans from '../components/sections/PricingPlans';

const Landing: React.FC = () => {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <Features />
      <WhySpecial />
      <CourseProgram />
      <PathToSuccess />
      <SuccessStories />
      <PricingPlans />
      <FAQ />
    </main>
  );
};

export default Landing; 