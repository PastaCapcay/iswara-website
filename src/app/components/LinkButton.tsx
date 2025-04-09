'use client';

import { AnchorHTMLAttributes, forwardRef } from 'react';

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ 
    children, 
    variant = 'primary', 
    size = 'md',
    leftIcon,
    rightIcon,
    className = '',
    ...props 
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants = {
      primary: 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
      outline: 'border border-emerald-600 text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-500'
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    };

    return (
      <a
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {leftIcon && (
          <span className="mr-2" aria-hidden="true">{leftIcon}</span>
        )}
        {children}
        {rightIcon && (
          <span className="ml-2" aria-hidden="true">{rightIcon}</span>
        )}
      </a>
    );
  }
);

LinkButton.displayName = 'LinkButton';

export default LinkButton; 