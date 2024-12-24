import { Button } from '@/atoms';
import { Input } from '@/atoms/form/input';
import { Skill } from '@/lib/interfaces';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { FC, MouseEvent, SetStateAction } from 'react';
import classes from './CategoryList.module.css';

interface CategoryListProps {
  skills: Record<string, Skill[]>;
  newCategory?: string;
  setNewCategory: (value: SetStateAction<string | undefined>) => void;
  handleSelectCategory: (e: MouseEvent, category: string) => void;
  handleAddCategory: () => void;
}

const CategoryList: FC<CategoryListProps> = ({
  skills,
  newCategory,
  setNewCategory,
  handleSelectCategory,
  handleAddCategory,
}) => {
  return (
    <div className={classes.categorySkill}>
      <h2>Categories</h2>
      <ul className={classes.categorySkillList}>
        {Object.entries(skills).map(([category]) => (
          <li key={category}>
            <button onClick={e => handleSelectCategory(e, category)}>{category}</button>
          </li>
        ))}
      </ul>
      <Input
        type="text"
        value={newCategory}
        name="category[4]"
        label="New category"
        onChange={val => setNewCategory(val)}
      />
      <Button label="Add" icon={<PlaylistAddIcon />} variant="outlined" onClick={handleAddCategory} />
    </div>
  );
};

export default CategoryList;
