'use client';

import classes from './Input.module.css';
import { useInput } from './useInput';

const Input = ({
  name,
  type = 'text',
  label = '',
  value = '',
  initValue,
  id,
  required = false,
  onChange,
}: {
  id?: string;
  type?: string;
  label?: string;
  value?: string;
  initValue?: string;
  name: string;
  required?: boolean;
  onChange?: (val: string) => void;
}) => {
  const { ref, val, isAutoFocus, isFocus, setFocus, handleChange, handleFocus } = useInput({
    initValue,
    value,
    type,
    onChange,
    name,
  });

  return (
    <div
      className={`${classes.inputWrapper} ${isFocus ? classes.inputFocused : classes.inputBlured} ${
        type === 'hidden' ? classes.hidden : ''
      }`}
    >
      {type !== 'hidden' && (
        <label htmlFor={id ?? name} onClick={handleFocus}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        name={name}
        type={type}
        value={val}
        id={id ?? name}
        autoFocus
        autoComplete={name}
        required={required}
        onFocus={handleFocus}
        onBlur={() => setFocus(isAutoFocus ? true : !!val || false)}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
