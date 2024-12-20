'use client';

import { ChangeEvent, useRef, useState } from 'react';
import classes from './Input.module.css';

const Input = ({ name, type = 'text', label = '', initValue, id, required = false }: { id?: string; type?: string; label?: string; initValue?: string; name: string; required?: boolean }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string | undefined>(initValue);
  const isAutoFocus = type === 'date';
  const [isFocus, setFocus] = useState(isAutoFocus || false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    if (!isFocus) {
      setFocus(true);
      ref.current?.focus();
    }
  };

  return (
    <div className={`${classes.inputWrapper} ${isFocus ? classes.inputFocused : classes.inputBlured}`}>
      <label htmlFor={name} onClick={handleFocus}>
        {label}
      </label>
      <input ref={ref} name={name} type={type} id={id} autoFocus required={required} onFocus={handleFocus} onBlur={() => setFocus(isAutoFocus ? true : !!value || false)} onChange={handleChange} />
    </div>
  );
};

export default Input;
