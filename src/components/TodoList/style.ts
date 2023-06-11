import styled from '@emotion/styled';
import { boxStyle } from '../../styles/css';

export const List = styled.ul`
  ${({ theme }) => boxStyle(theme)};

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const AltText = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.gray};
`;
