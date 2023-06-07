import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const Label = styled.p`
  margin-bottom: 7px;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const TextFieldBorder = styled.div`
  padding: 7px;
  width: fit-content;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.gray};

  :focus-within {
    border-color: ${({ theme }) => theme.color.primary};
  }
`;

export const TextField = styled.input`
  outline: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
