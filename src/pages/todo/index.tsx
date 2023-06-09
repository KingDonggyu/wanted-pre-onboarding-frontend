import Route from '../../constants/routes';
import useAuthRedirection from '../../hooks/useAuthRedirection';

const TodoPage = () => {
  const isAuth = useAuthRedirection({
    to: Route.SIGNIN,
    isRedirectIfAuth: false,
  });

  if (!isAuth) {
    return null;
  }

  return <main>Todo</main>;
};

export default TodoPage;
