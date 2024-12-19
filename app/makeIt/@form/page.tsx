'use client';
import { CreateCV } from '@/actions/addCv';

const Second = () => {
  const handleClick = async () => {
    await CreateCV();
  };

  return (
    <>
      <h1>Second</h1>
      <button onClick={handleClick}>Add cv of David</button>
    </>
  );
};

export default Second;
