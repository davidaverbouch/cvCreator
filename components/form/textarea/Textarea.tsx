'use client';

import { ChangeEvent, useState } from 'react';
import classes from './Textarea.module.css';

const Textarea = ({ name, label = '', id, required = false }: { id: string; label?: string; name: string; required?: boolean }) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [isFocus, setFocus] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={`${classes.textareaWrapper} ${isFocus ? classes.textareaFocused : classes.textareaBlured}`}>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={id} required={required} rows={10} onFocus={() => setFocus(true)} onBlur={() => setFocus(!!value || false)} onChange={handleChange} />
    </div>
  );
};

export default Textarea;
