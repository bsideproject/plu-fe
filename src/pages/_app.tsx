import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Hydrate } from 'react-query';

import ReactQueryClientProvider from '@/commons/QueryClientProvider';
import ThemeProvider from '@/context/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, viewport-fit=cover" />
      </Head>
      <ReactQueryClientProvider>
        <ThemeProvider>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </ThemeProvider>
      </ReactQueryClientProvider>
    </>
  );
}

export default MyApp;
