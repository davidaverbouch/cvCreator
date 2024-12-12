import { ReactElement } from 'react';
import classes from './layout.module.css';

const ParallelsLayout = ({ first, second }: { first: ReactElement; second: ReactElement }) => {
  return (
    <main className={classes.main}>
      <div className={classes.left}>{first}</div>
      <div className={classes.right}>{second}</div>
    </main>
  );
};

export default ParallelsLayout;
