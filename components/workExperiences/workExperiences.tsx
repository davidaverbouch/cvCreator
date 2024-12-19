import { WorkExperience } from '@/lib/interfaces';
import classes from './workExperiences.module.css';

const WorkExperiences = ({ workExperiences }: { workExperiences: WorkExperience[] }) => {
  return (
    <div className={classes.workExperiencesWrapper}>
      {workExperiences.map(xp => (
        <div className={classes.xpWrapper} key={`${xp.company_name}_${xp.year}`}>
          <h3>
            {xp.company_name}
            {xp.is_esn > 0 && <small> ({xp.esn_name})</small>}
            {xp.year && <small> - {xp.year}</small>}
          </h3>
          <p>{xp.title}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkExperiences;
