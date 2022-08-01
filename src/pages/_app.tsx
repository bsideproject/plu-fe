import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import { GlobalStyle } from '@/theme';
import KaKaoMapContainer from '@/components/commons/KaKaoMapContainer';
import ReactQueryClientProvider from '@/commons/QueryClientProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const kakaoMapRef = useRef<HTMLDivElement>(null);

  // 사용 예시
  useEffect(() => {
    if (window.kakao && kakaoMapRef.current) {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new window.kakao.maps.Map(kakaoMapRef.current, options);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, viewport-fit=cover" />
      </Head>
      <ReactQueryClientProvider>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <GlobalStyle />
          {/* <KaKaoMapContainer ref={kakaoMapRef} width={500} height={500} /> */}
        </Hydrate>
      </ReactQueryClientProvider>
    </>
  );
}

export default MyApp;
