import * as React from 'react';
import { clsx } from 'clsx';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
}

/**
 * A wrapper of html `button` element.
 */
export const Button = function Button({ variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        variantClass[variant],
        'px-3 py-1 shadow rounded border active:translate-y-px transition',
        props.className
      )}
    />
  );
};

const variantClass: Record<ButtonVariant, string> = {
  primary: 'bg-teal-500 text-white hover:bg-teal-600 border-transparent',
  secondary: 'bg-white text-teal-600 hover:text-teal-700 border-current',
};
