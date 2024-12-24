'use client';

import { Button } from '@/atoms';
import { Ref } from 'react';
import { useFormStatus } from 'react-dom';

const Submit = ({ ref }: { ref?: Ref<HTMLButtonElement> }) => {
  const status = useFormStatus();
  return <Button ref={ref} label="submit" disabled={status.pending} type="submit" />;
};

export default Submit;
