import type { FC } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ProblemSolutionItem as ProblemSolutionItemType } from '../../../types/sections';

interface ProblemSolutionItemsProps {
  items: ProblemSolutionItemType[];
  isIntersecting: boolean;
  itemVariants: Variants;
}

const ProblemSolutionItems: FC<ProblemSolutionItemsProps> = ({
  items,
  isIntersecting,
  itemVariants
}) => {
  return (
    <div className="mb-16">
      <div className="relative">
        {/* Background accent line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent transform -translate-x-1/2"></div>
        
        <div className="space-y-8">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <motion.div
                key={index}
                initial="hidden"
                animate={isIntersecting ? "visible" : "hidden"}
                variants={itemVariants}
                custom={index}
                className="flex items-center gap-8"
              >
                {/* Problem side */}
                <div className="flex-1 text-right">
                  <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 justify-start">
                    <span className="line-through text-gray-500 font-medium">{item.problem}</span>
                    <IconComponent className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                
                {/* Center connector */}
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-pink rounded-full"></div>
                  </div>
                  {index < items.length - 1 && (
                    <div className="absolute top-12 left-1/2 w-px h-8 bg-gray-200 transform -translate-x-1/2"></div>
                  )}
                </div>

                {/* Solution side */}
                <div className="flex-1 text-left">
                  <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-primary-pink/5 border border-primary-pink/20 justify-end">
                    <IconComponent className="w-5 h-5 text-primary-pink/60" />
                    <span className="font-bold text-primary-dark">{item.solution}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionItems;