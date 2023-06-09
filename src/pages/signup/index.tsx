import { useState } from 'react';
import * as s from './style';
import Button from '../../components/Button';
import SignForm from '../../components/SignForm';
import User from '../../types/user';
import useSignUp from '../../hooks/services/useSignUp';

const SignupPage = () => {
  const signUp = useSignUp();
  const [disabled, setDisabled] = useState(true);

  const handleValidate = (isValid: boolean) => {
    setDisabled(!isValid);
  };

  const handleComplete = async ({ email, password }: User) => {
    signUp({ email, password });
  };

  return (
    <s.Wrapper>
      <s.Title>회원가입</s.Title>
      <s.FormBox>
        <SignForm onValidate={handleValidate} onComplete={handleComplete}>
          <Button type='submit' data-testid='signup-button' disabled={disabled}>
            완료
          </Button>
        </SignForm>
      </s.FormBox>
    </s.Wrapper>
  );
};

export default SignupPage;
