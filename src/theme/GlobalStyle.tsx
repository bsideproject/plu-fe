import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}
      * {
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStyle;
