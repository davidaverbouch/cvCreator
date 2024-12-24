'use client';

import classes from './Input.module.css';
import { useInput } from './useInput';

const ERROR_MSG = 'Please fill the fields';

const Input = ({
  name,
  type = 'text',
  label = '',
  value = '',
  initValue,
  id,
  required = false,
  autoFocus = false,
  isError = false,
  onChange,
}: {
  id?: string;
  type?: string;
  label?: string;
  value?: string | number;
  initValue?: string;
  name: string;
  required?: boolean;
  autoFocus?: boolean;
  isError?: boolean;
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
      className={`${classes.inputWrapper} ${isError ? classes.error : ''} ${
        isFocus ? classes.inputFocused : classes.inputBlured
      } ${type === 'hidden' ? classes.hidden : ''}`}
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
        autoFocus={autoFocus}
        autoComplete={name}
        required={required}
        onFocus={handleFocus}
        onBlur={() => setFocus(isAutoFocus ? true : !!val || false)}
        onChange={handleChange}
      />
      {isError && <span className={classes.error}>{ERROR_MSG}</span>}
    </div>
  );
};

export default Input;
