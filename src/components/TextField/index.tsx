import { InputHTMLAttributes, forwardRef } from 'react';
import * as s from './style';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextField = forwardRef(({ label, ...inputAttrs }: TextFieldProps) => {
  const textField = (
    <s.TextFieldBorder>
      <s.TextField type='text' {...inputAttrs} />
    </s.TextFieldBorder>
  );

  if (!label) {
    return textField;
  }

  return (
    <s.Wrapper>
      {!!label && <s.Label>{label}</s.Label>}
      {textField}
    </s.Wrapper>
  );
});

export default TextField;
