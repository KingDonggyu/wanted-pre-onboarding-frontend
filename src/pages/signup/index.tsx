import Button from '../../components/Button';
import SignForm from '../../components/SignForm';
import * as s from './style';

const SignupPage = () => (
  <s.Wrapper>
    <s.Title>회원가입</s.Title>
    <SignForm>
      <Button type='submit' data-testid='signup-button'>
        완료
      </Button>
    </SignForm>
  </s.Wrapper>
);

export default SignupPage;
