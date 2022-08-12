import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
            rel="stylesheet"
          />

          {/* <script
            type="text/javascript"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}`}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <div
            id="modal"
            style={{
              display: 'none',
              position: 'fixed',
              inset: 0,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
