import { useCategorizeSkills } from '@/app/hooks/useSkills';
import { Skill } from '@/lib/interfaces';
import { SkillEdition } from './skillEdition';
import classes from './skills.module.css';

const Skills = ({ skills }: { skills: Skill[] }) => {
  const skillsAdapted = useCategorizeSkills({ skills });

  return (
    <div className={classes.skillsBlockWrapper}>
      <div className={classes.skillsEditing}>
        <SkillEdition />
      </div>
      {Object.entries(skillsAdapted).map(([category, skillsCategorized]) => (
        <div key={category}>
          <h2>{category}</h2>

          <div className={classes.skillsWrapper}>
            {skillsCategorized.map((skill, idx) => (
              <span key={skill.name}>
                {skill.name}
                {idx !== skills.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
