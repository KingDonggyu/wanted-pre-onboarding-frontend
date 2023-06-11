import { css, Theme } from '@emotion/react';

export const boxStyle = (theme: Theme) => css`
  padding: 3em;
  border-radius: 1em;
  border: 1px solid ${theme.color.line};
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
`;

export const titleStyle = (theme: Theme) => css`
  font-weight: bold;
  font-size: ${theme.fontSize.display};
`;
