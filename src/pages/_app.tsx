import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import { GlobalStyle } from '@/theme';
import { sendRNMessage } from '@/utils/rnMessage';
import { DatePicker } from '@/components';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  const [name, setName] = useState<string>('김아무개');
  const [type, setType] = useState<string>('type');

  // React -> RN
  useEffect(() => {
    sendRNMessage({
      type: 'NOTIFICATION',
      data: {
        name: '홍길동',
      },
    });
  }, []);

  // RN -> React
  useEffect(() => {
    if (!window.ReactNativeWebView) return;

    const listener = (event: any) => {
      const parsedData = JSON.parse(event.data);

      const {
        type,
        data: { name },
      } = parsedData;

      setName(name);
      setType(type);
    };

    window.addEventListener('message', listener);

    return () => {
      window.removeEventListener('message', listener);
    };
  }, []);

  const [date, setDate] = useState(new Date());

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, viewport-fit=cover" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <GlobalStyle />
          <p style={{ margin: 100 }}> {type}</p>
          <p style={{ margin: 100 }}> {name}</p>
          <DatePicker date={date} onChange={(e) => setDate(e)} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
