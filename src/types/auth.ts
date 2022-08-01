export interface LoginRequestType {
  email: string;
  password: string;
}

export interface LoginResponseType {
  accessToken: string;
  accessTokenExpiresIn: number;
  grantType: string;
  refreshToken: string;
}
