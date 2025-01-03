'use client';
import { CreateCV } from '@/actions/addCv';
import { Button } from '@/atoms';
import AddIcon from '@mui/icons-material/Add';

const CvForm = () => {
  const handleClick = async () => {
    await CreateCV();
  };

  return <Button icon={<AddIcon />} onClick={handleClick} />;
};

export default CvForm;
