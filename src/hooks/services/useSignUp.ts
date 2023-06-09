import { useNavigate } from 'react-router-dom';
import useMutation from '../useMutation';
import User from '../../types/user';
import UserRepository from '../../repository/api/UserRepository';
import Route from '../../constants/routes';
import handleHttpError from '../../utils/handleHttpError';

const useSignUp = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation<void, User>({
    mutationFunc: async ({ email, password }) => {
      return new UserRepository().signup({ email, password });
    },

    onSuccess: () => {
      navigate(Route.SIGNIN);
    },

    onError: (error) => {
      const response = handleHttpError(error);
      if (response) {
        alert(response.message);
      }
    },
  });

  return mutate;
};

export default useSignUp;
