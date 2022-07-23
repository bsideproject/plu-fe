import { serviceQueryKey } from '@/commons/serviceQueryKey';
import { testRequest } from '@/networks/test';
import { useQuery } from 'react-query';

export const useTestQuery = () => {
  const { data, ...restProps } = useQuery(serviceQueryKey.FETCH_TEST(), testRequest);

  return {
    data: data as string,
    ...restProps,
  };
};
