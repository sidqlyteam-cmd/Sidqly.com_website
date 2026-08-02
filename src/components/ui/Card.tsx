import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'white' | 'ivory' | 'border' | 'navy';
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'white',
  hoverable = false,
  className = '',
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  const baseClasses = 'p-8 rounded-[32px] transition-all border';

  const variantClasses = {
    white: 'bg-white border-gray-100 shadow-sm',
    ivory: 'bg-sidqly-ivory border-gray-100 shadow-sm',
    border: 'bg-white border-gray-100 hover:border-sidqly-green-soft shadow-sm',
    navy: 'bg-sidqly-navy text-white border-white/10 shadow-lg',
  };

  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (shouldReduceMotion || !hoverable) {
    return (
      <div className={finalClassName} {...props}>
        {children}
      </div>
    );
  }

  // Typecast motion div props safely to any to bypass React 19 custom drag and drop typescript conflicts
  const motionProps: any = {
    whileHover: { y: -4, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' },
    transition: { duration: 0.2, ease: 'easeOut' },
    ...props
  };

  return (
    <motion.div
      className={finalClassName}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default Card;
