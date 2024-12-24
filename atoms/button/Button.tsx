import React, { Ref } from 'react';
import classes from './Button.module.css';

interface ButtonProps {
  ref?: Ref<HTMLButtonElement>;
  onClick?: () => void;
  label?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
  variant?: 'plain' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
}

const Button: React.FC<ButtonProps> = ({
  ref,
  onClick,
  label,
  disabled = false,
  icon,
  iconPosition = 'left',
  type = 'button',
  variant = 'plain',
  color = 'primary',
}) => {
  return (
    <button
      ref={ref}
      type={type}
      className={`${classes.btn} ${classes[`style-${variant}`]} ${classes[`color-${color}`]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && icon}
      {label && label}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};

export default Button;
