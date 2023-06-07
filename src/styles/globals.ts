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
    font-size: 62.5%;
  }
`;

export default globalStyle;
