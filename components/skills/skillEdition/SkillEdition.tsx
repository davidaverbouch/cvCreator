'use client';

import { Button } from '@/components/button';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const SkillEdition: FC = () => {
  const route = useRouter();

  const handleClick = () => {
    route.push('/makeIt/skills');
  };

  return <Button icon={<EditIcon />} label="Edit" onClick={handleClick} />;
};

export default SkillEdition;
