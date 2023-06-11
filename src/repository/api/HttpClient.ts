import axios from 'axios';
import AuthRepository from '../localStorage/AuthRepository';

class HttpClient {
  protected axiosInstance = axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop/',
  });

  constructor() {
    const token = new AuthRepository().get();

    if (token) {
      this.authorization(token);
    }
  }

  private authorization(token: string) {
    this.axiosInstance.interceptors.request.use((config) => {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }
}

export default HttpClient;
