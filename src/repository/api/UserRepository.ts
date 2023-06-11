import HttpClient from './HttpClient';
import User, { SignInResponse } from '../../types/user';

class UserRepository extends HttpClient {
  public async signup({ email, password }: User) {
    await this.axiosInstance.post('/auth/signup', {
      email,
      password,
    });
  }

  public async signin({ email, password }: User) {
    const { data } = await this.axiosInstance.post<SignInResponse>(
      '/auth/signin',
      {
        email,
        password,
      }
    );

    return data;
  }
}

export default UserRepository;
