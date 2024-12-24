import { ChangeEvent, useEffect, useRef, useState } from 'react';

interface UseInput {
  type?: string;
  value?: string | number;
  initValue?: string;
  name: string;
  onChange?: (val: string) => void;
}

export const useInput = ({ initValue, value, type, onChange }: UseInput) => {
  const ref = useRef<HTMLInputElement>(null);
  const [val, setVal] = useState<string | number | undefined>(initValue ?? value);
  const isAutoFocus = type === 'date';
  const [isFocus, setFocus] = useState(isAutoFocus || !!val || false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const handleFocus = () => {
    if (!isFocus) {
      setFocus(true);
      ref.current?.focus();
    }
  };

  useEffect(() => {
    if (!value) setFocus(isAutoFocus || false);
    setVal(value);
  }, [value]);

  return {
    ref,
    val,
    isAutoFocus,
    isFocus,
    setFocus,
    handleChange,
    handleFocus,
  };
};
