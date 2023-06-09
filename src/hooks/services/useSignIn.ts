import { useNavigate } from 'react-router-dom';
import useMutation from '../useMutation';
import UserRepository from '../../repository/api/UserRepository';
import AuthRepository from '../../repository/localStorage/AuthRepository';
import User, { SignInResponse } from '../../types/user';
import Route from '../../constants/routes';
import handleHttpError from '../../utils/handleHttpError';

const useSignIn = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation<SignInResponse, User>({
    mutationFunc: async ({ email, password }) => {
      return new UserRepository().signin({
        email,
        password,
      });
    },

    onSuccess: ({ access_token }) => {
      new AuthRepository().set(access_token);
      navigate(Route.TODO);
    },

    onError: (error) => {
      const response = handleHttpError(error);

      if (response) {
        response.statusCode === 401
          ? alert('이메일 또는 비밀번호를 잘못 입력했습니다.')
          : alert(response.message);
      }
    },
  });

  return mutate;
};

export default useSignIn;
