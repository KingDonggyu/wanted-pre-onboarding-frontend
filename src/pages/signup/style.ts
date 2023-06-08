import styled from '@emotion/styled';

export const Wrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5em;
`;

export const Title = styled.h1(({ theme }) => ({
  fontSize: theme.fontSize.display,
  fontWeight: 'bold',
}));

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.5em;
  width: 35em;
`;
