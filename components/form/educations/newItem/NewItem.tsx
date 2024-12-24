import { Button } from '@/atoms';
import { Input } from '@/atoms/form/input';
import { Education } from '@/lib/interfaces';
import AddIcon from '@mui/icons-material/Add';
import { FC } from 'react';
import classes from './NewItem.module.css';

const NewItem: FC<{
  errors: Record<string, boolean>;
  newEducation: Education;
  handleSetNewEducation: (key: string, value: string | number) => void;
  handleAddEducation: () => void;
}> = ({ errors, newEducation, handleSetNewEducation, handleAddEducation }) => {
  return (
    <div className={classes.educationNewItem}>
      <h3>Add a education</h3>
      <div className={classes.educationToAdd}>
        <Input
          type="text"
          name={`school`}
          value={newEducation.school}
          label="school"
          onChange={val => handleSetNewEducation('school', val || '')}
          isError={errors.school ?? false}
        />
        <Input
          type="text"
          name={`city`}
          value={newEducation.city}
          label="city"
          onChange={val => handleSetNewEducation('city', val || '')}
          isError={errors.city ?? false}
        />
        <Input
          type="number"
          name={`year`}
          value={`${newEducation.year}`}
          label="year"
          onChange={val => handleSetNewEducation('year', Number(val))}
          isError={errors.year ?? false}
        />
        <Input
          type="number"
          name={`duration`}
          value={`${newEducation.duration}`}
          label="duration"
          onChange={val => handleSetNewEducation('duration', Number(val))}
          isError={errors.duration ?? false}
        />
        <Button variant="text" icon={<AddIcon />} onClick={handleAddEducation} />
      </div>
    </div>
  );
};

export default NewItem;
