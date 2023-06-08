import axios from 'axios';

class HttpClient {
  protected axiosInstance = axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop/',
  });
}

export default HttpClient;
