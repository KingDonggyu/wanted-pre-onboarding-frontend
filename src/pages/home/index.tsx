import { Link } from 'react-router-dom';
import * as s from './style';
import Route from '../../constants/routes';

const HomePage = () => (
  <s.Wrapper>
    <s.Title>원티드 프리온보딩 프론트엔드 - 선발 과제</s.Title>
    <Link to={Route.SIGNIN}>시작하기</Link>
  </s.Wrapper>
);

export default HomePage;
