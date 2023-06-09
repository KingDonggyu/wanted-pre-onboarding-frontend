import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Route from '../constants/routes';
import AuthRepository from '../repository/localStorage/AuthRepository';

interface AuthRedirectionParams {
  to: Route;
  isRedirectIfAuth: boolean;
}

const useAuthRedirection = ({
  to,
  isRedirectIfAuth,
}: AuthRedirectionParams) => {
  const navigate = useNavigate();
  const authRepository = useMemo(() => new AuthRepository(), []);
  const [isAuth, setIsAuth] = useState(!!authRepository.get());

  useEffect(() => {
    if (authRepository.get()) {
      setIsAuth(true);
      if (isRedirectIfAuth) {
        navigate(to, { replace: true });
      }
      return;
    }

    setIsAuth(false);
    navigate(to, { replace: true });
  }, [authRepository, isRedirectIfAuth, navigate, to]);

  return isAuth;
};

export default useAuthRedirection;
