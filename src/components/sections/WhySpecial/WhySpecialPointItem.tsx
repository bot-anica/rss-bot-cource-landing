import type { FC } from 'react';
import { memo } from 'react';
import Button from '../../common/Button';
import { WhySpecialPoint } from '../../../types/sections';
import { ButtonVariant } from '../../../types/common';

interface WhySpecialPointItemProps {
  point: WhySpecialPoint;
  isActive: boolean;
  onClick: () => void;
}

const WhySpecialPointItem: FC<WhySpecialPointItemProps> = ({ point, isActive, onClick }) => {
  const IconComponent = point.icon;

  return (
    <Button
      onClick={onClick}
      variant={ButtonVariant.GHOST}
      className={`w-full text-left cursor-pointer bg-white p-4 rounded-xl border border-l-4 transition-all duration-300 ${
        isActive
          ? 'border-gray-300 hover:border-pink-300'
          : 'border-white hover:border-gray-300'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 flex items-center justify-center`}>
          <IconComponent style={{ color: point.color }} />
        </div>
        <div>
          <h3 className={`font-semibold text-lg ${
            isActive 
              ? 'text-black' 
              : 'text-gray-700'
          }`}>
            {point.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-1">
            {point.description}
          </p>
        </div>
      </div>
    </Button>
  );
};

export default memo(WhySpecialPointItem);