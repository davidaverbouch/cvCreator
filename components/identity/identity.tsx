import { User } from '@/lib/interfaces';
import { FC } from 'react';
import classes from './identity.module.css';

const Identity: FC<User> = ({ sex, firstName, lastName, birthday, phone, email, address, driveLicence }) => {
  return (
    <div className={classes.identityWrapper}>
      <div className={classes.block}>
        <div className={classes.icon} />
        <div>
          <p>
            {sex} {firstName} {lastName}
          </p>
          <p>{birthday.toLocaleDateString()}</p>
        </div>
      </div>
      <div className={classes.block}>
        <div className={classes.icon} />
        <div>
          <p>{phone}</p>
        </div>
      </div>
      <div className={classes.block}>
        <div className={classes.icon} />
        <div>
          <p>{email}</p>
          <p>{address}</p>
        </div>
      </div>
      <div className={classes.block}>
        <div className={classes.icon} />
        <div>
          <p>Permis {driveLicence}</p>
        </div>
      </div>
    </div>
  );
};

export default Identity;
