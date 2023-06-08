import Button from '../../components/Button';
import TextField from '../../components/TextField';
import * as s from './style';

const SignupPage = () => (
  <s.Wrapper>
    <s.Title>회원가입</s.Title>
    <s.Form>
      <TextField data-testid='email-input' label='이메일' />
      <TextField data-testid='password-input' label='비밀번호' />
      <Button type='submit' data-testid='signup-button'>
        완료
      </Button>
    </s.Form>
  </s.Wrapper>
);

export default SignupPage;
