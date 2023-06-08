import { useState } from 'react';
import Button from '../../components/Button';
import SignForm from '../../components/SignForm';
import * as s from './style';

const SignupPage = () => {
  const [disabled, setDisabled] = useState(true);

  const handleValidate = (isValid: boolean) => {
    setDisabled(!isValid);
  };

  return (
    <s.Wrapper>
      <s.Title>회원가입</s.Title>
      <SignForm onValidate={handleValidate}>
        <Button type='submit' data-testid='signup-button' disabled={disabled}>
          완료
        </Button>
      </SignForm>
    </s.Wrapper>
  );
};

export default SignupPage;
