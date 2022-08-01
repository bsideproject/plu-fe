import request from '@/commons/axios';
import { LoginRequestType, LoginResponseType } from '@/types/auth';

export const tryLogin = async (params: LoginRequestType) => {
  const res = await request<LoginResponseType>({
    method: 'POST',
    url: '/api/auth/login',
    data: params,
  });

  return res;
};
