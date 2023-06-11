import styled from '@emotion/styled';
import { titleStyle } from '../../styles/css';

export const Wrapper = styled.main`
  padding-top: 10em;
  margin: auto;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4em;
`;

export const Title = styled.h1`
  ${({ theme }) => titleStyle(theme)}
`;

export const Add = styled.div`
  width: 40em;
  display: flex;
  gap: 2em;

  input {
    flex-grow: 1;
  }

  button {
    width: 5em;
  }
`;
