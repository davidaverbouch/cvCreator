import { Input } from '@/atoms/form/input';
import { Education } from '@/lib/interfaces';
import { FC } from 'react';
import classes from './EducationsList.module.css';

interface EducationsListProps {
  educations: Education[];
  handleUpdateEducations: (index: number, key: string, value: string | number) => void;
}

const EducationsList: FC<EducationsListProps> = ({ educations, handleUpdateEducations }) => {
  return (
    <div className={classes.educationsList}>
      {educations.map((_education, index) => (
        <div key={index} className={classes.educations}>
          <Input
            type="text"
            name={`${index}.school`}
            value={_education.school}
            label="school"
            onChange={val => handleUpdateEducations(index, 'school', val)}
            isError={false}
          />
          <Input
            type="text"
            name={`${index}.city`}
            value={_education.city}
            label="city"
            onChange={val => handleUpdateEducations(index, 'city', val)}
            isError={false}
          />
          <Input
            type="number"
            name={`${index}.year`}
            value={`${_education.year}`}
            label="year"
            onChange={val => handleUpdateEducations(index, 'year', val)}
            isError={false}
          />
          <Input
            type="number"
            name={`${index}.duration`}
            value={`${_education.duration}`}
            label="duration"
            onChange={val => handleUpdateEducations(index, 'duration', val)}
            isError={false}
          />
        </div>
      ))}
    </div>
  );
};

export default EducationsList;
