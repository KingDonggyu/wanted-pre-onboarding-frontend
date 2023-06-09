import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as s from './style';
import Button from '../../components/Button';
import SignForm from '../../components/SignForm';
import Route from '../../constants/routes';
import User from '../../types/user';
import useSignIn from '../../hooks/services/useSignIn';
import useAuthRedirection from '../../hooks/useAuthRedirection';

const SigninPage = () => {
  const signIn = useSignIn();
  const [disabled, setDisabled] = useState(true);

  const isAuth = useAuthRedirection({
    to: Route.TODO,
    isRedirectIfAuth: true,
  });

  const handleValidate = (isValid: boolean) => {
    setDisabled(!isValid);
  };

  const handleComplete = async ({ email, password }: User) => {
    signIn({ email, password });
  };

  if (isAuth) {
    return null;
  }

  return (
    <s.Wrapper>
      <s.Title>로그인</s.Title>
      <s.FormBox>
        <SignForm onValidate={handleValidate} onComplete={handleComplete}>
          <Button type='submit' data-testid='signin-button' disabled={disabled}>
            완료
          </Button>
        </SignForm>
      </s.FormBox>
      <Link to={Route.SIGNUP}>회원가입</Link>
    </s.Wrapper>
  );
};

export default SigninPage;
