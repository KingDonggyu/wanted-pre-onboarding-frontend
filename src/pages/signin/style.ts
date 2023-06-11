import styled from '@emotion/styled';
import { boxStyle, titleStyle } from '../../styles/css';

export const Wrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 1em;
  }

  a {
    margin-top: 1.5em;
    width: fit-content;
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const Title = styled.h1`
  ${({ theme }) => titleStyle(theme)}
  margin-bottom: 1em;
`;

export const FormBox = styled.div`
  ${({ theme }) => boxStyle(theme)}
`;
