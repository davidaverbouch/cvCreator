'use client';

import { Button } from '@/components/button';
import { useRouter } from 'next/navigation';

const FormCancel: React.FC = () => {
  const router = useRouter();

  const handleCancel = () => {
    router.push('.');
  };

  return <Button label="Cancel" onClick={handleCancel} variant="outlined" />;
};

export default FormCancel;
