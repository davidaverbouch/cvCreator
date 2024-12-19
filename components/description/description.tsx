import classes from './descriptioin.module.css';

const Description = ({ description, mindset }: { description: string; mindset: string }) => {
  return (
    <div className={classes.descriptionWrapper}>
      <p className={classes.highlight}>{description}</p>
      <p>{mindset}</p>
    </div>
  );
};

export default Description;
