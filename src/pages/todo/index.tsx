import * as s from './style';
import Route from '../../constants/routes';
import useAuthRedirection from '../../hooks/useAuthRedirection';
import TodoAdder from '../../components/TodoAdder';
import TodoItem from '../../components/TodoItem';

const TodoPage = () => {
  const isAuth = useAuthRedirection({
    to: Route.SIGNIN,
    isRedirectIfAuth: false,
  });

  if (!isAuth) {
    return null;
  }

  return (
    <s.Wrapper>
      <s.Title>TODO List</s.Title>
      <TodoAdder />
      <TodoItem />
    </s.Wrapper>
  );
};

export default TodoPage;
