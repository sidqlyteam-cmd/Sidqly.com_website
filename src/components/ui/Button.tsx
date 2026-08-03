import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'emerald' | 'deep' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'deep',
  size = 'md',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Consistent background/text map matching design tokens
  const baseClasses = 'inline-flex items-center justify-center font-bold transition-all rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidqly-green-soft focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variantClasses = {
    emerald: 'bg-sidqly-green-emerald text-white hover:bg-[#166534]',
    deep: 'bg-sidqly-green-deep text-white hover:bg-[#0c392c]',
    secondary: 'bg-sidqly-ivory border border-[#e2e8f0] text-sidqly-navy hover:bg-[#f1f5f9]',
    outline: 'border border-[#e2e8f0] text-[#0b1d2a] hover:bg-sidqly-ivory bg-transparent',
    ghost: 'bg-transparent text-sidqly-navy hover:bg-sidqly-ivory',
  };

  const finalClassName = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (shouldReduceMotion || disabled) {
    return (
      <button className={finalClassName} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }

  // Typecast motion button props safely to any to bypass React 19 custom drag and drop typescript conflicts
  const motionProps: any = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.15, ease: 'easeInOut' },
    ...props
  };

  return (
    <motion.button
      className={finalClassName}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
};

export default Button;
