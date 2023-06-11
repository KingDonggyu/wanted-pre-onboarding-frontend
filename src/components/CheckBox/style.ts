import styled from '@emotion/styled';

export const CheckBox = styled.input`
  cursor: pointer;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5em;
  height: 1.5em;
  min-width: 1.5em;
  min-height: 1.5em;
  border-radius: 0.2em;
  border: 1px solid ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
