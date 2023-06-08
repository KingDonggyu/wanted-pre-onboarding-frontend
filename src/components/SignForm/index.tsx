import { ReactNode, FormHTMLAttributes } from 'react';
import TextField from '../../components/TextField';
import * as s from './style';

interface SignFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const SignForm = ({ children, ...formAttrs }: SignFormProps) => {
  return (
    <s.Form {...formAttrs}>
      <TextField data-testid='email-input' label='이메일' />
      <TextField data-testid='password-input' label='비밀번호' />
      {children}
    </s.Form>
  );
};

export default SignForm;
