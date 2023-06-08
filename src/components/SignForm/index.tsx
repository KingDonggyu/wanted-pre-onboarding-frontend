import {
  ReactNode,
  FormHTMLAttributes,
  FormEvent,
  ChangeEvent,
  useState,
  useEffect,
  useCallback,
} from 'react';
import * as s from './style';
import User from '../../types/user';
import TextField from '../../components/TextField';

interface SignFormProps extends FormHTMLAttributes<HTMLFormElement> {
  onValidate: (isValid: boolean) => void;
  onComplete: ({ email, password }: User) => void;
  children: ReactNode;
}

const SignForm = ({
  onValidate,
  onComplete,
  children,
  ...formAttrs
}: SignFormProps) => {
  const [values, setValues] = useState<User>({ email: '', password: '' });

  const validate = useCallback(() => {
    const isValid = values.email.includes('@') && values.password.length >= 8;
    onValidate(isValid);
    return isValid;
  }, [onValidate, values.email, values.password.length]);

  const handleChage = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      onComplete({ ...values });
    }
  };

  useEffect(() => {
    validate();
  }, [validate]);

  return (
    <s.Form method='post' onSubmit={handleSubmit} {...formAttrs}>
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
