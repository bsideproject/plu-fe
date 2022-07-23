import { FC, ReactNode, useState } from 'react';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from 'react-query';

import { useError } from '@/hooks/commons/error';

type Props = {
  children: ReactNode;
};

const ReactQueryClientProvider: FC<Props> = (props) => {
  const { children } = props;
  const { handleError } = useError();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
        queryCache: new QueryCache({
          onError: (error, query) => {
            if (query.meta?.shouldBeHandledByGlobalErrorHandler) {
              handleError(error);
            }
          },
        }),
        mutationCache: new MutationCache({
          onError: (err, variables, context, mutation) => {
            if (mutation.meta?.shouldBeHandledByGlobalErrorHandler) {
              handleError(err);
            }
          },
        }),
      })
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryClientProvider;
