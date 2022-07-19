import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const customReset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}
      ${customReset}
    `}
  />
);

export default GlobalStyle;
