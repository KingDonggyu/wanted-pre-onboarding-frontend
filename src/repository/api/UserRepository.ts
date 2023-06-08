import axiosInstance from './httpClient';
import User, { SignInResponse } from '../../types/user';

class UserRepository {
  public async signup({ email, password }: User) {
    return axiosInstance.post('/auth/signup', { email, password });
  }

  public async signin({ email, password }: User) {
    const { data } = await axiosInstance.post<SignInResponse>('/auth/signin', {
      email,
      password,
    });

    return data;
  }
}

export default UserRepository;
