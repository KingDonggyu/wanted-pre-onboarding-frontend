import styled from '@emotion/styled';
import { titleStyle } from '../../styles/css';

export const Wrapper = styled.main`
  width: 100%;
  height: 90%;
  padding: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5em;

  a {
    width: 100%;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    padding: 0.5em;
    border-radius: 0.3em;
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.fontSize.large};

    :hover {
      background: ${({ theme }) => theme.color.blue2};
    }
  }
`;

export const Title = styled.h1`
  ${({ theme }) => titleStyle(theme)};
  line-height: 1.5;
`;
