import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 1em;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const Todo = styled.span`
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ButtonSet = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;

  button {
    width: max-content;
    background: none;
    color: ${({ theme }) => theme.color.black};
    :hover {
      background: none;
    }
    :last-of-type {
      color: ${({ theme }) => theme.color.gray};
    }
  }
`;
