'use client';

import { Button } from '@/atoms';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const CancelBttn: FC = () => {
  const router = useRouter();

  const handleCancel = () => {
    router.push('.');
  };

  return <Button label="Cancel" onClick={handleCancel} variant="outlined" />;
};

export default CancelBttn;
