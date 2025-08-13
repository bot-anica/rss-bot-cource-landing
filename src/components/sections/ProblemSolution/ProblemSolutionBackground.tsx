import type { FC } from 'react';
import BackgroundCircle from '../../ui/BackgroundCircle';
import BackgroundIcon from '../../ui/BackgroundIcon';
import ProblemSolutionBG from '../../../assets/images/ProblemSolutionBG.jpg';
import FromSidesBG from '../../../assets/images/FromSidesBG.jpg';

const ProblemSolutionBackground: FC = () => {
  return (
    <>
      <img src={FromSidesBG} alt="" className="absolute -top-24 lg:-top-28 xl:-top-32 w-full h-full object-cover" />
      {/* <img src={ProblemSolutionBG} alt="" className="absolute -top-24 lg:-top-28 xl:-top-32 w-full h-full object-cover" /> */}
      {/* <BackgroundCircle 
        position="bottom-right" 
        size="large" 
        color="blue" 
        opacity={0.15} 
        animation="float" 
        delay={0} 
      />
      <BackgroundCircle 
        position="top-left" 
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
      /> */}
    </>
  );
};

export default ProblemSolutionBackground;