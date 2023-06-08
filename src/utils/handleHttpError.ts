import { AxiosError } from 'axios';
import HttpFailed from '../types/http';

const handleHttpError = (error: unknown) => {
  const { response } = error as AxiosError<HttpFailed>;
  return response?.data;
};

export default handleHttpError;
