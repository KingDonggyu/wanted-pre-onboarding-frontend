import * as s from './style';
import Route from '../../constants/routes';
import useAuthRedirection from '../../hooks/useAuthRedirection';
import TodoAdder from '../../components/TodoAdder';
import TodoList from '../../components/TodoList';

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
      <TodoList />
    </s.Wrapper>
  );
};

export default TodoPage;
