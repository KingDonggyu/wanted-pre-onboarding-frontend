import styled from '@emotion/styled';

export const Button = styled.button(({ theme }) => ({
  cursor: 'pointer',
  border: 'none',
  width: '100%',
  padding: '0.5em',
  borderRadius: '0.3em',
  fontWeight: 'bold',
  background: theme.color.primary,
  color: theme.color.white,
  fontSize: theme.fontSize.medium,
}));
