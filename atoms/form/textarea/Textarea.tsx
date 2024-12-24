'use client';

import { ChangeEvent, useRef, useState } from 'react';
import classes from './Textarea.module.css';

const Textarea = ({
  name,
  label = '',
  id,
  value,
  required = false,
}: {
  id?: string;
  label?: string;
  name: string;
  value?: string;
  required?: boolean;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [newValue, setValue] = useState<string | undefined>(value);
  const [isFocus, setFocus] = useState(!!newValue || false);

  const handleChange = (e: ChangeEvent<HTMLSpanElement>) => {
    const text = e.target.textContent;
    console.log({ text });
    setValue(text === null ? undefined : text);
    if (text === null) {
      setFocus(false);
    }
  };
  const handleFocus = () => {
    setFocus(true);
    if (ref?.current) ref.current?.focus();
  };

  return (
    <div className={`${classes.textareaWrapper} ${isFocus ? classes.textareaFocused : classes.textareaBlured}`}>
      <label htmlFor={name} onClick={handleFocus}>
        {label}
      </label>
      <span
        ref={ref}
        className={classes.textarea}
        role="textbox"
        contentEditable
        onInput={handleChange}
        onFocus={handleFocus}
        onBlur={() => setFocus(!!newValue || false)}
        suppressContentEditableWarning
      >
        {value}
      </span>
      <textarea name={name} id={id} required={required} readOnly value={newValue} />
    </div>
  );
};

export default Textarea;
