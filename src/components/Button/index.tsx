import { ReactNode, ButtonHTMLAttributes } from 'react';
import * as s from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ type = 'button', children, ...buttonAttrs }: ButtonProps) => (
  <s.Button type={type} {...buttonAttrs}>
    {children}
  </s.Button>
);

export default Button;
