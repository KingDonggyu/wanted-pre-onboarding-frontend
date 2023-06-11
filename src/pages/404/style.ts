import styled from '@emotion/styled';
import { titleStyle } from '../../styles/css';

export const Wrapper = styled.main`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 5em;

  a {
    width: 50%;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    padding: 0.5em;
    margin-top: 2em;
    border-radius: 0.3em;
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.fontSize.medium};

    :hover {
      background: ${({ theme }) => theme.color.blue2};
    }
  }
`;

export const Title = styled.h1`
  ${({ theme }) => titleStyle(theme)};
  line-height: 1.5;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
