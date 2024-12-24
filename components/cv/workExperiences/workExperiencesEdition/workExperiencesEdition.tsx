'use client';

import { Button } from '@/atoms';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const WorkExperiencesEdition: FC = () => {
  const route = useRouter();

  const handleClick = () => {
    route.push('/makeIt/workExperiences');
  };

  return <Button icon={<EditIcon />} label="Edit" onClick={handleClick} />;
};

export default WorkExperiencesEdition;
