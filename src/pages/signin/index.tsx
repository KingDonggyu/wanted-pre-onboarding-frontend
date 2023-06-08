import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as s from './style';
import Button from '../../components/Button';
import SignForm from '../../components/SignForm';

import Route from '../../constants/routes';
import UserRepository from '../../repository/api/user';
import User from '../../types/user';
import handleHttpError from '../../utils/handleHttpError';

const SigninPage = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);

  const handleValidate = (isValid: boolean) => {
    setDisabled(!isValid);
  };

  const hanmdleComplete = async ({ email, password }: User) => {
    try {
      await new UserRepository().signin({ email, password });
      navigate(Route.TODO);
    } catch (error) {
      const response = handleHttpError(error);
      if (!response) {
        return;
      }
      if (response.statusCode === 401) {
        alert('이메일 또는 비밀번호를 잘못 입력했습니다.');
        return;
      }
      alert(response.message);
    }
  };

  return (
    <s.Wrapper>
      <s.Title>로그인</s.Title>
      <s.FormBox>
        <SignForm onValidate={handleValidate} onComplete={hanmdleComplete}>
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
