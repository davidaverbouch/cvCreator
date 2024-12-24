import { Button } from '@/atoms';
import { Input } from '@/atoms/form/input';
import { Skill } from '@/lib/interfaces';
import AddIcon from '@mui/icons-material/Add';
import { FC, SetStateAction } from 'react';
import { Checkbox } from '../../../../atoms/form/checkbox';
import classes from './NewItem.module.css';

const NewItem: FC<{
  newSkill: Skill;
  setNewSkill: (value: SetStateAction<Skill>) => void;
  handleAddSkill: () => void;
}> = ({ newSkill, setNewSkill, handleAddSkill }) => {
  return (
    <div className={classes.skillNewItem}>
      <h3>Add a skill</h3>
      <div className={classes.skillToAdd}>
        <Input type="hidden" name="category" label="category" />
        <Input
          type="text"
          name="name"
          value={newSkill.name}
          label="skill"
          onChange={val => setNewSkill({ ...newSkill, name: val || '' })}
        />
        <Input
          type="text"
          name="level"
          value={`${newSkill.level}`}
          label="level"
          onChange={val => setNewSkill({ ...newSkill, level: Number(val) || 0 })}
        />
        <Checkbox
          name="is_main"
          checked={newSkill.is_main === 1}
          label="main"
          onChange={val => setNewSkill({ ...newSkill, is_main: Number(val) || 0 })}
        />
        <Button variant="text" icon={<AddIcon />} onClick={handleAddSkill} />
      </div>
    </div>
  );
};

export default NewItem;
