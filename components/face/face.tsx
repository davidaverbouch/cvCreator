import defaultFacePicture from '@/asserts/pictures/defaultFace.png';
import facePicture from '@/asserts/pictures/face.png';
import Image from 'next/image';
import classes from './face.module.css';

const Face = ({ face }: { face: string }) => {
  return (
    <div className={classes.faceWrapper}>
      <Image src={face === 'default' ? defaultFacePicture : facePicture} alt="face picture" fill sizes="150" />
    </div>
  );
};

export default Face;
