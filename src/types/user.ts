export default interface User {
  email: string;
  password: string;
}

export interface SignInResponse {
  access_token: string;
}
