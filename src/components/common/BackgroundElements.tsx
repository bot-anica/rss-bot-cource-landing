import BackgroundBlob from '../ui/BackgroundBlob';
import BackgroundIcon from '../ui/BackgroundIcon';

export interface BackgroundElementsProps {
  showBlobs?: boolean;
  showIcons?: boolean;
}

const BackgroundElements: React.FC<BackgroundElementsProps> = ({
  showBlobs = true,
  showIcons = true
}) => {
  return (
    <>
      {showBlobs && (
        <>
          <BackgroundBlob 
            position="top-left" 
            size="large" 
            color="pinkPurple" 
            opacity={0.08} 
            animation="float" 
            delay={0} 
          />
          <BackgroundBlob 
            position="bottom-right" 
            size="medium" 
            color="purple" 
            opacity={0.06} 
            animation="drift" 
            delay={3} 
          />
        </>
      )}
      
      {showIcons && (
        <>
          <BackgroundIcon 
            icon="star" 
            position="top-right" 
            size={30} 
            color="primary-pink" 
            opacity={0.2} 
            animation="float" 
            delay={1} 
          />
        </>
      )}
    </>
  );
};

export default BackgroundElements; 