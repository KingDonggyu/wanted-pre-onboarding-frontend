import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const globalStyle = () => css`
  ${emotionReset}

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  @media screen and (max-width: 480px) {
    html {
      font-size: 50%;
    }
  }

  #root {
    width: 100%;
    height: 100vh;
    margin: auto;
    max-width: 80rem;
    overflow-y: auto;
  }
`;

export default globalStyle;
