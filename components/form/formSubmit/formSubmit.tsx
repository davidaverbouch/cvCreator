'use client';

import { Button } from '@/components/button';
import { Ref } from 'react';
import { useFormStatus } from 'react-dom';

const FormSubmit = ({ ref }: { ref?: Ref<HTMLButtonElement> }) => {
  const status = useFormStatus();
  return <Button ref={ref} label="submit" disabled={status.pending} type="submit" />;
};

export default FormSubmit;
