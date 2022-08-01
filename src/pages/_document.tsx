import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            type="text/javascript"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal_container" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
