import { Skill } from '@/lib/interfaces';
import classes from './skills.module.css';
import { useSkills } from './useSkills';

const Skills = ({ skills }: { skills: Skill[] }) => {
  const skillsAdapted = useSkills({ skills });

  return (
    <div className={classes.skillsBlockWrapper}>
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
