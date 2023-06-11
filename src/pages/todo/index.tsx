import * as s from './style';
import Route from '../../constants/routes';
import useAuthRedirection from '../../hooks/useAuthRedirection';
import TodoAdder from '../../components/TodoAdder';
import TodoList from '../../components/TodoList';
import { TodoListProvider } from '../../contexts/todoListContext';
import SignOutButton from '../../components/SignOutButton';

const TodoPage = () => {
  const isAuth = useAuthRedirection({
    to: Route.SIGNIN,
    isRedirectIfAuth: false,
  });

  if (!isAuth) {
    return null;
  }

  return (
    <TodoListProvider>
      <s.Wrapper>
        <SignOutButton />
        <s.Title>TODO List</s.Title>
        <TodoAdder />
        <TodoList />
      </s.Wrapper>
    </TodoListProvider>
  );
};

export default TodoPage;
