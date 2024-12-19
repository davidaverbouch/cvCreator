import { Description, Educations, Face, Identity, MainSkills, Skills } from '@/components';
import { WorkExperiences } from '@/components/workExperiences';
import classes from './page.module.css';
import { useGetCV } from './useGetCV';

const First = () => {
  const { cv, user } = useGetCV();

  return (
    <div className={classes.makeItWrapper}>
      <h1>{cv.title}</h1>
      <div className={classes.header}>
        <MainSkills skills={cv.skills} />
        <Identity {...user} />
      </div>
      <div className={classes.description}>
        <Face face={cv.face} />
        <Description description={cv.description} mindset={cv.mindset} />
      </div>
      <div className={classes.skillsAndXp}>
        <div className={classes.skillsAndEducation}>
          <div className={classes.skills}>
            <Skills skills={cv.skills} />
          </div>
          <div className={classes.education}>
            <Educations educations={cv.educations} />
          </div>
        </div>
        <div className={classes.xp}>
          <WorkExperiences workExperiences={cv.workExperiences} />
        </div>
      </div>
    </div>
  );
};

export default First;
