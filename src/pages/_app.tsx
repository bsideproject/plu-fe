import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Hydrate } from 'react-query';

import ReactQueryClientProvider from '@/commons/QueryClientProvider';
import ThemeProvider from '@/context/ThemeContext';
import { Button } from '@/components';
import { useRouter } from 'next/router';

const COMPONENTS = ['button', 'navigationbar', 'navigationbottom', 'textfield', 'typography'];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, viewport-fit=cover" />
      </Head>
      <ReactQueryClientProvider>
        <ThemeProvider>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
            <div>
              {COMPONENTS.map((com) => (
                <div>
                  <Button
                    key={com}
                    onClick={() => {
                      router.push(com);
                    }}
                  >
                    {com}
                  </Button>
                </div>
              ))}
            </div>
          </Hydrate>
        </ThemeProvider>
      </ReactQueryClientProvider>
    </>
  );
}

export default MyApp;
