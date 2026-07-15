'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-sica-blue text-white hover:bg-sica-blue/90 focus:ring-sica-blue',
        secondary: 'bg-sica-cyan text-white hover:bg-sica-cyan/90 focus:ring-sica-cyan',
        accent: 'bg-sica-emerald text-white hover:bg-sica-emerald/90 focus:ring-sica-emerald',
        outline: 'border-2 border-sica-blue text-sica-blue hover:bg-sica-blue/5',
        ghost: 'text-sica-blue hover:bg-sica-blue/10',
      },
      size: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-2.5 text-base',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-4 text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(buttonVariants({ variant, size, fullWidth, className }))}
      {...props}
    />
  )
);

Button.displayName = 'Button';
