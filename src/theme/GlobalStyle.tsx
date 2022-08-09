import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const customReset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body * {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }

  #__next {
    padding: 0 20px 16px;
    min-height: 100vh;
    height: 100vh;
  }

  button {
    border: 0;
    outline: 0;
  }

  input {
    border: none;
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
