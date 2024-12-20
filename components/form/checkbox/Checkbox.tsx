import React, { useState } from 'react';
import classes from './Checkbox.module.css';

interface CheckboxProps {
  name: string;
  label: string;
  checked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label, checked = false }) => {
  const [isChecked, setChecked] = useState<boolean>(checked);

  const handleClick = () => {
    setChecked(!isChecked);
  };

  return (
    <div className={`${classes.checkboxContainer} ${isChecked ? classes.checked : ''}`}>
      <label htmlFor={name}>{label}</label>
      <input className={classes.hiddenCheckbox} readOnly checked={isChecked} type="checkbox" />
      <div className={`${classes.styledCheckbox} ${isChecked ? classes.checked : ''}`} onClick={handleClick}>
        <svg className={classes.icon} viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
  );
};

export default Checkbox;
