import { useQuery } from 'react-query';

import { fetchAdminInfo } from '@/networks/admin';
import { serviceQueryKey } from '@/commons/serviceQueryKey';

export const useAdminInfo = (useGlobalErrorHandle = true) => {
  const { data, ...rest } = useQuery(serviceQueryKey.FETCH_ADMIN_INFO(), fetchAdminInfo, {
    meta: {
      shouldBeHandledByGlobalErrorHandler: useGlobalErrorHandle,
    },
  });

  return {
    data: data!,
    ...rest,
  };
};
