import axiosInstance from './httpClient';
import User from '../../types/user';

class UserRepository {
  public async signup({ email, password }: User) {
    return axiosInstance.post('/auth/signup', { email, password });
  }
}

export default UserRepository;
