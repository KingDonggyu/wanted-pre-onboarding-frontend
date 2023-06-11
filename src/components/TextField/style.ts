import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const Label = styled.p`
  margin-bottom: 0.5em;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const TextFieldBorder = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 0.5em;
  border: 1px solid ${({ theme }) => theme.color.gray};

  :focus-within {
    border-color: ${({ theme }) => theme.color.primary};
  }
`;

export const TextField = styled.input`
  outline: none;
  border: none;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
