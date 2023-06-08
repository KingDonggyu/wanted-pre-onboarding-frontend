import {
  ReactNode,
  FormHTMLAttributes,
  FormEvent,
  ChangeEvent,
  useState,
  useEffect,
  useCallback,
} from 'react';
import TextField from '../../components/TextField';
import * as s from './style';

interface SignFormProps extends FormHTMLAttributes<HTMLFormElement> {
  onValidate: (isValid: boolean) => void;
  children: ReactNode;
}

const SignForm = ({ onValidate, children, ...formAttrs }: SignFormProps) => {
  const [values, setValues] = useState({ email: '', password: '' });

  const validate = useCallback(() => {
    onValidate(values.email.includes('@') && values.password.length >= 8);
  }, [onValidate, values.email, values.password.length]);

  const handleChage = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    validate();
  }, [validate]);

  return (
    <s.Form onSubmit={handleSubmit} {...formAttrs}>
      <TextField
        data-testid='email-input'
        name='email'
        label='이메일'
        placeholder='@을 포함한 이메일을 입력해주세요.'
        value={values.email}
        onChange={handleChage}
      />
      <TextField
        data-testid='password-input'
        type='password'
        name='password'
        label='비밀번호'
        placeholder='8자 이상의 비밀번호를 입력해주세요.'
        value={values.password}
        onChange={handleChage}
      />
      {children}
    </s.Form>
  );
};

export default SignForm;
