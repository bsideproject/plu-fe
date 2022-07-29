import { useQuery, UseQueryOptions } from 'react-query';

import { serviceQueryKey } from '@/commons/serviceQueryKey';
import { testRequest } from '@/networks/test';

export const useTestQuery = (
  options?: Omit<UseQueryOptions<string, unknown, string, string[]>, 'queryKey' | 'queryFn'> | undefined
) => {
  const { data, ...restProps } = useQuery(serviceQueryKey.FETCH_TEST(), testRequest, {
    ...options,
  });

  return {
    data: data as string,
    ...restProps,
  };
};
