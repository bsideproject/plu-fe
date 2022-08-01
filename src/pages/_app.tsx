import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Hydrate } from 'react-query';

import { GlobalStyle } from '@/theme';
import ReactQueryClientProvider from '@/commons/QueryClientProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, viewport-fit=cover" />
      </Head>
      <ReactQueryClientProvider>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <GlobalStyle />
        </Hydrate>
      </ReactQueryClientProvider>
    </>
  );
}

export default MyApp;
