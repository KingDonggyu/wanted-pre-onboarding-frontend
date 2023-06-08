import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import Button from '../../components/Button';
import SignForm from '../../components/SignForm';

import User from '../../types/user';
import UserRepository from '../../repository/api/user';
import handleHttpError from '../../utils/handleHttpError';
import Route from '../../constants/routes';

const SignupPage = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);

  const handleValidate = (isValid: boolean) => {
    setDisabled(!isValid);
  };

  const handleComplete = async ({ email, password }: User) => {
    try {
      await new UserRepository().signup({ email, password });
      navigate(Route.SIGNIN);
    } catch (error) {
      const response = handleHttpError(error);
      if (response) {
        alert(response.message);
      }
    }
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
