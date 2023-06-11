import { useCallback, useEffect, useState } from 'react';
import * as s from './style';

interface CheckBoxProps {
  checked: boolean;
  onChecked?: (isChecked: boolean) => void;
  onUnchecked?: (isChecked: boolean) => void;
}

const CheckBox = ({ checked, onChecked, onUnchecked }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    const newIsChecked = !isChecked;

    setIsChecked(newIsChecked);

    if (newIsChecked) {
      if (onChecked) {
        onChecked(newIsChecked);
      }
      return;
    }

    if (onUnchecked) {
      onUnchecked(newIsChecked);
    }
  };

  return (
    <s.CheckBox type='button' onClick={handleClick}>
      {!!isChecked && '✔️'}
    </s.CheckBox>
  );
};

export default CheckBox;
