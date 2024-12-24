'use client';

import { Button } from '@/atoms/button';
import classes from './Image.module.css';
import { useImage } from './useImage';

const Image = ({
  name,
  value = '',
  id,
  required = false,
  onChange,
}: {
  id?: string;
  value?: string;
  name: string;
  required?: boolean;
  onChange?: (val: string) => void;
}) => {
  const { ref, val, handleSelect, handleChange } = useImage({
    value,
    onChange,
  });

  return (
    <div className={classes.imageWrapper}>
      <input
        ref={ref}
        name={name}
        type="file"
        value={val}
        id={id ?? name}
        required={required}
        onChange={handleChange}
      />
      <Button onClick={handleSelect} type="button" label="Choose" />
    </div>
  );
};

export default Image;
