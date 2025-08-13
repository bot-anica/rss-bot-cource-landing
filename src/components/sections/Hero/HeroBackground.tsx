import type { FC } from 'react';
import { memo } from 'react';
import BackgroundCircle from '../../ui/BackgroundCircle';
import BackgroundIcon from '../../ui/BackgroundIcon';
import HeroBG from '../../../assets/images/HeroBG.jpg';

const HeroBackground: FC = () => {
  return (
    <>
      <img src={HeroBG} alt="" className="absolute w-full h-full object-cover" />
      {/* Background Circles */}
      {/* <BackgroundCircle 
        position="top-left" 
        size="large" 
        color="pinkPurple" 
        opacity={0.08} 
        animation="breathe" 
        delay={0} 
      />
      <BackgroundCircle 
        position="bottom-right" 
        size="large" 
        color="purplePink" 
        opacity={0.06} 
        animation="float" 
        delay={4} 
      /> */}
      
      {/* Background Icons */}
      {/* <BackgroundIcon 
        icon="sparkles" 
        position="top-right" 
        size={40} 
        color="primary-pink" 
        opacity={0.3} 
        animation="float" 
        delay={0} 
      />
      <BackgroundIcon 
        icon="sparkles" 
        position="bottom-left" 
        size={30} 
        color="primary-blue" 
        opacity={0.25} 
        animation="wave" 
        delay={3} 
      /> */}
    </>
  );
};

export default memo(HeroBackground);