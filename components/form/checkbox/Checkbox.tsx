import React, { useEffect, useState } from 'react';
import classes from './Checkbox.module.css';

interface CheckboxProps {
  name: string;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label, checked = false, onChange }) => {
  const [isChecked, setChecked] = useState<boolean>(checked);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const handleClick = () => {
    setChecked(!isChecked);
    if (onChange) onChange(!isChecked);
  };

  return (
    <div className={`${classes.checkboxContainer} ${isChecked ? classes.checked : ''}`}>
      <label htmlFor={name}>{label}</label>
      <input
        autoComplete={name}
        id={name}
        name={name}
        className={classes.hiddenCheckbox}
        readOnly
        checked={isChecked}
        type="checkbox"
      />
      <div className={`${classes.styledCheckbox} ${isChecked ? classes.checked : ''}`} onClick={handleClick}>
        <svg className={classes.icon} viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
  );
};

export default Checkbox;
