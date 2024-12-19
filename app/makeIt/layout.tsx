import { ReactElement } from 'react';
import classes from './layout.module.css';

const ParallelsLayout = ({ cv, form }: { cv: ReactElement; form: ReactElement }) => {
  return (
    <main className={classes.main}>
      <div className={classes.left}>{cv}</div>
      <div className={classes.right}>{form}</div>
    </main>
  );
};

export default ParallelsLayout;
