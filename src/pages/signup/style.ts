import styled from '@emotion/styled';

export const Wrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6em;

  button {
    margin-top: 1em;
  }
`;

export const Title = styled.h1(({ theme }) => ({
  fontSize: theme.fontSize.display,
  fontWeight: 'bold',
}));
