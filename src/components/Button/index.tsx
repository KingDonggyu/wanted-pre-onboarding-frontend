import { ReactNode, ButtonHTMLAttributes } from 'react';
import * as s from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({
  type = 'button',
  disabled = false,
  children,
  ...buttonAttrs
}: ButtonProps) => (
  <s.Button type={type} disabled={disabled} {...buttonAttrs}>
    {children}
  </s.Button>
);

export default Button;
