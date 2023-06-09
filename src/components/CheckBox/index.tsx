import { useEffect, useState } from 'react';
import * as s from './style';

interface CheckBoxProps {
  checked: boolean;
  onChecked?: () => void;
  onUnchecked?: () => void;
}

const CheckBox = ({ checked, onChecked, onUnchecked }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (checked) {
      if (onChecked) {
        onChecked();
      }
      return;
    }
    if (onUnchecked) {
      onUnchecked();
    }
  }, [checked, onChecked, onUnchecked]);

  return (
    <s.CheckBox type='button' onClick={handleClick}>
      {!!isChecked && '✔️'}
    </s.CheckBox>
  );
};

export default CheckBox;
