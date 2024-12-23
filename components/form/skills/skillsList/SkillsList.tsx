import { Input } from '@/components/form/input';
import { Skill } from '@/lib/interfaces';
import { FC } from 'react';
import { Checkbox } from '../../checkbox';
import classes from './SkillsList.module.css';

interface SkillsListProps {
  skills: Record<string, Skill[]>;
  currentCategory: string;
  handleUpdateSkill: (index: number, key: string, value: string | number) => void;
}

const SkillsList: FC<SkillsListProps> = ({ skills, currentCategory, handleUpdateSkill }) => {
  return (
    <div className={classes.skillList}>
      {!!currentCategory &&
        skills[currentCategory].map((_skill, index) => (
          <div key={index} className={classes.skill}>
            <Input
              type="hidden"
              name={`category[0]`}
              value={_skill.category}
              label="category"
              onChange={val => handleUpdateSkill(index, 'category', val)}
            />
            <Input
              type="text"
              name={`name[${index}]`}
              value={_skill.name}
              label="skill"
              onChange={val => handleUpdateSkill(index, 'name', val)}
            />
            <Input
              type="text"
              name={`level[${index}]`}
              value={`${_skill.level}`}
              label="level"
              onChange={val => handleUpdateSkill(index, 'level', val)}
            />
            <Checkbox
              name={`is_main[${index}]`}
              checked={_skill.is_main === 1}
              label="main"
              onChange={val => handleUpdateSkill(index, 'is_main', val ? 1 : 0)}
            />
          </div>
        ))}
    </div>
  );
};

export default SkillsList;
