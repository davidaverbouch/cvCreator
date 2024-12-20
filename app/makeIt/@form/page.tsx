'use client';
import { CreateCV } from '@/actions/addCv';

const CvForm = () => {
  const handleClick = async () => {
    await CreateCV();
  };

  return (
    <>
      <h1>CvForm</h1>
      <button onClick={handleClick}>Add cv of David</button>
    </>
  );
};

export default CvForm;
