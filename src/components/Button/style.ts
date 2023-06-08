import styled from '@emotion/styled';

export const Button = styled.button<{ disabled: boolean }>(
  ({ theme, disabled }) => ({
    cursor: disabled ? 'default' : 'pointer',
    border: 'none',
    width: '100%',
    padding: '0.5em',
    borderRadius: '0.3em',
    fontWeight: 'bold',
    background: disabled ? theme.color.gray : theme.color.primary,
    color: theme.color.white,
    fontSize: theme.fontSize.medium,
    ':hover': {
      background: disabled ? undefined : theme.color.blue2,
    },
  })
);
