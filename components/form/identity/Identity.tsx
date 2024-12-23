'use client';

import { Action } from '@/actions/interfaces';
import { useActionState } from 'react';
import { FormCancel } from '../formCancel';
import { FormSubmit } from '../formSubmit';
import { Input } from '../input';
import classes from './Identity.module.css';

const Identity: React.FC<Action> = ({ action }) => {
  const [state, formAction] = useActionState(action, null);

  console.log({ state });

  return (
    <div className={classes.identityWrapper}>
      <div className={classes.identityContainer}>
        <form action={formAction}>
          <div className={classes.trio}>
            <Input type="text" name="sex" label="Sex" />
            <Input type="text" name="firstName" label="First Name" />
            <Input type="text" name="lastName" label="Last Name" />
          </div>
          <div className={classes.trio}>
            <Input type="date" name="birthday" label="Birthday" />
            <Input type="tel" name="phoneNumber" label="Phone Number" />
            <Input type="email" name="mail" label="Mail" />
          </div>
          <div className={classes.duo}>
            <Input type="text" name="address" label="Address" />
            <Input type="text" name="driveLicence" label="Drive Licence" />
          </div>
        </form>
      </div>
      <div className={classes.identityFooter}>
        <div>
          <FormCancel />
        </div>
        <div>
          <FormSubmit />
        </div>
      </div>
    </div>
  );
};

export default Identity;
