import request from '@/commons/axios';

export const fetchAdminInfo = async () => {
  const res = await request<string>({
    method: 'GET',
    url: '/api/admin/get-info',
  });

  return res;
};
