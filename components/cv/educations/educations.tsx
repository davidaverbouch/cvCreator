import { Education } from '@/lib/interfaces';
import { EducationEdition } from './educationEdition';
import classes from './educations.module.css';

const Educations = ({ educations }: { educations: Education[] }) => {
  return (
    <div className={classes.educationsWrapper}>
      <h2>Education</h2>
      <div className={classes.educationsContainer}>
        {educations.map(education => (
          <div className={classes.educationItem} key={education.year}>
            <h3>Niveau - Intitulé</h3>
            <p>
              {education.year}/{education.year + education.duration} - {education.school} - {education.city}
            </p>
          </div>
        ))}
        <div className={classes.educationsEditing}>
          <EducationEdition />
        </div>
      </div>
    </div>
  );
};

export default Educations;
