import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { LoaderCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default: 'bg-foreground text-primary-foreground hover:bg-foreground/80',
        dark: 'bg-background text-foreground hover:bg-background/80',
        vivid: 'gradient hover:opacity-80',
        outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
      },
      fonts: {
        default: 'text-[1.375rem]/8 font-semibold',
        special: 'font-card font-semibold leading-5',
        xs: 'text-xs/5 font-semibold',
        sm: 'text-sm/5 font-semibold',
      },
      discount: {
        true: `relative after:bg-destructive after:content-["-${50}%"] after:absolute after:inset-y-0 after:aspect-square after:rounded-full after:top-0 after:right-0 hover:after:animate-pulse after:flex after:items-center after:justify-center`,
      },
      size: {
        default: 'h-[3.5625rem] px-4 py-2',
        sm: 'h-10 gap-1.5 px-3',
        md: 'h-[3.125rem] rounded-xl px-4',
        lg: 'h-[4.625rem] px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      fonts: 'default',
    },
  },
);

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isSubmitting?: boolean;
  text?: React.ReactNode;
}

function Button({
  className,
  variant,
  size,
  fonts,
  discount = false,
  asChild = false,
  isSubmitting = false,
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      type={type}
      className={cn(buttonVariants({ variant, size, fonts, discount }), className)}
      {...props}
    >
      {isSubmitting ? <LoaderCircle className='stroke-accent animate-spin' /> : children}
    </Comp>
  );
}

export { Button, buttonVariants };
