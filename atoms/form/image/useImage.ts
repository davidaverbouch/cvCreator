import { ChangeEvent, useEffect, useRef, useState } from 'react';

interface UseImage {
  value?: string;
  onChange?: (val: string) => void;
}

export const useImage = ({ value, onChange }: UseImage) => {
  const ref = useRef<HTMLInputElement>(null);
  const [val, setVal] = useState<string | undefined>(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const handleSelect = () => {
    if (ref?.current) ref.current.click();
  };

  useEffect(() => {
    setVal(value);
  }, [value]);

  return {
    ref,
    val,
    handleSelect,
    handleChange,
  };
};
