'use client';

import { Button } from '@/atoms';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const UserEdition: FC = () => {
  const route = useRouter();

  const handleClick = () => {
    route.push('/makeIt/user');
  };

  return <Button icon={<EditIcon />} label="Edit" onClick={handleClick} />;
};

export default UserEdition;
