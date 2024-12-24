import { Description, Educations, Face, Identity, MainSkills, Skills, WorkExperiences } from '@/components';
import classes from './page.module.css';
import { useGetCV } from './useGetCV';
import { UserEdition } from './userEdition';

const First = () => {
  const { cv, user } = useGetCV();

  return (
    <div className={classes.makeItWrapper}>
      <h1>
        <div className={classes.userEditing}>
          <UserEdition />
        </div>
        {cv.title}
      </h1>
      <div className={classes.header}>
        <MainSkills skills={cv.skills} />
        <Identity {...user} />
      </div>
      <div className={classes.description}>
        <Face face={cv.face} />
        <Description description={cv.description} mindset={cv.mindset} />
        <div className={classes.userEditing}>
          <UserEdition />
        </div>
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
