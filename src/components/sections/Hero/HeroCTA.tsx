import { FC, memo, Fragment } from 'react';
import { motion } from 'framer-motion';
import { CTAItem } from '../../../types/sections';
import { ButtonIconPosition, ButtonSize } from '../../../types/common';
import { Button } from '../../common';

interface HeroCTAProps {
  cta: Record<"primary" | "secondary", CTAItem>;
  itemVariants: any;
}

const renderButtonIcon = (icon: any, color = 'primary-dark') => {
  const IconComponent = icon
  return <IconComponent className={`w-6 h-6 text-${color}`} />
};

const HeroCTA: FC<HeroCTAProps> = ({ cta, itemVariants }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="flex flex-col sm:flex-row md:flex-col xl:flex-row gap-4 md:gap-6 items-center md:items-start xl:items-center mb-8 lg:md-16"
    >
      {Object.keys(cta).map((key) => {
        const item = cta[key as "primary" | "secondary"];
        return (
          <Fragment key={item.text}>
            <Button
              key={`${key}_default`}
              variant={item.buttonVariant}
              size={ButtonSize.LG}
              to={item.link}
              className="not-xl:hidden xl:flex group space-x-2"
            >
              {item.buttonIcon && item.buttonIconPosition === ButtonIconPosition.LEFT && renderButtonIcon(item.buttonIcon, item.buttonIconColor)}
              <span>{item.text}</span>
              {item.buttonIcon && item.buttonIconPosition === ButtonIconPosition.RIGHT && renderButtonIcon(item.buttonIcon, item.buttonIconColor)}
            </Button>
            <Button
              key={`${key}_medium`}
              variant={item.buttonVariant}
              size={ButtonSize.MD}
              to={item.link}
              className="not-md:hidden md:flex xl:hidden group space-x-2"
            >
              {item.buttonIcon && item.buttonIconPosition === ButtonIconPosition.LEFT && renderButtonIcon(item.buttonIcon, item.buttonIconColor)}
              <span>{item.text}</span>
              {item.buttonIcon && item.buttonIconPosition === ButtonIconPosition.RIGHT && renderButtonIcon(item.buttonIcon, item.buttonIconColor)}
            </Button>
            <Button
              key={`${key}_small`}
              variant={item.buttonVariant}
              size={ButtonSize.SM}
              to={item.link}
              className="flex md:hidden group space-x-2"
            >
              {item.buttonIcon && item.buttonIconPosition === ButtonIconPosition.LEFT && renderButtonIcon(item.buttonIcon, item.buttonIconColor)}
              <span>{item.text}</span>
              {item.buttonIcon && item.buttonIconPosition === ButtonIconPosition.RIGHT && renderButtonIcon(item.buttonIcon, item.buttonIconColor)}
            </Button>
          </Fragment>
        );
      })}
    </motion.div>
  );
};

export default memo(HeroCTA);