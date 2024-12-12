import { ChangeEvent, useState } from 'react';
import classes from './Input.module.css';

const Input = ({ name, type = 'text', label = '', id, required = false }: { id: string; type?: string; label?: string; name: string; required?: boolean }) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [isFocus, setFocus] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={`${classes.inputWrapper} ${isFocus ? classes.inputFocused : classes.inputBlured}`}>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} id={id} required={required} onFocus={() => setFocus(true)} onBlur={() => setFocus(!!value || false)} onChange={handleChange} />
    </div>
  );
};

export default Input;
