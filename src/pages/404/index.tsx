import { Link } from 'react-router-dom';
import * as s from './style';
import Route from '../../constants/routes';

const NotFoundPage = () => (
  <s.Wrapper>
    <s.Title>해당 페이지를 찾을 수 없습니다.</s.Title>
    <s.Description>404 - Page is not Found</s.Description>
    <Link to={Route.HOME}>홈으로 이동</Link>
  </s.Wrapper>
);

export default NotFoundPage;
