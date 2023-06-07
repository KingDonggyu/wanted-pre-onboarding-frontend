import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const globalStyle = () => css`
  ${emotionReset}

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    width: 100%;
    margin: auto;
    max-width: 70rem;
    padding-top: 5rem;
    font-size: 62.5%;
  }
`;

export default globalStyle;
