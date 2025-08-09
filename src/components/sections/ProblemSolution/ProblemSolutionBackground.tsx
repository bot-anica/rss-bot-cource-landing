import type { FC } from 'react';
import BackgroundCircle from '../../ui/BackgroundCircle';
import BackgroundIcon from '../../ui/BackgroundIcon';

const ProblemSolutionBackground: FC = () => {
  return (
    <>
      <BackgroundCircle 
        position="top-left" 
        size="large" 
        color="blue" 
        opacity={0.15} 
        animation="float" 
        delay={0} 
      />
      <BackgroundCircle 
        position="bottom-right" 
        size="large" 
        color="pink" 
        opacity={0.12} 
        animation="drift" 
        delay={3} 
      />
      <BackgroundIcon 
        icon="sparkles" 
        position="top-right" 
        size={35} 
        color="primary-pink" 
        opacity={0.25} 
        animation="float" 
        delay={0} 
      />
      <BackgroundIcon 
        icon="star" 
        position="bottom-left" 
        size={28} 
        color="primary-blue" 
        opacity={0.2} 
        animation="bounce" 
        delay={2} 
      />
    </>
  );
};

export default ProblemSolutionBackground;