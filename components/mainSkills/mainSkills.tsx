import { Skill } from '@/lib/interfaces';
import classes from './mainSkills.module.css';
import { useMainSkills } from './useMainSkills';

const MainSkills = ({ skills }: { skills: Skill[] }) => {
  const mainSkills = useMainSkills({ skills });

  return (
    <div className={classes.mainSkillsWrapper}>
      {mainSkills?.map(skill => (
        <div className={classes.skillsWrapper} key={skill.name}>
          <h3>{skill.name}</h3>
          <div className={classes.progressWrapper}>
            <div className={`${classes.progression} ${skill.level < 10 ? classes.incomplete : ''}`} style={{ width: `calc(100% * ${skill.level / 10})` }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainSkills;
