'use client';

import { useFormStatus } from 'react-dom';
import classes from './formSubmit.module.css';

const FormSubmit = () => {
  const status = useFormStatus();
  return (
    <button className={classes.submitBtn} disabled={status.pending} type="submit">
      submit
    </button>
  );
};

export default FormSubmit;
