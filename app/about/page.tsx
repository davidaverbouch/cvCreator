import classes from './page.module.css';

const About = () => {
  return (
    <div className={classes.aboutWrapper}>
      <h1>About</h1>
      <div className={classes.about}>
        <p>This web application wrote with Nextjs. ...</p>
      </div>
    </div>
  );
};

export default About;
