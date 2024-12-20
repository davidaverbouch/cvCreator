'use client';

import { Action } from '@/actions/interfaces';
import { useActionState } from 'react';
import { FormSubmit } from '../formSubmit';
import { Input } from '../input';
import classes from './Identity.module.css';

const Identity: React.FC<Action> = ({ action }) => {
  const [state, formAction] = useActionState(action, null);

  console.log({ state });

  return (
    <form action={formAction}>
      <div className={classes.name}>
        <Input type="text" name="sex" label="Sex" />
        <Input type="text" name="firstName" label="First Name" />
        <Input type="text" name="lastName" label="Last Name" />
      </div>
      <Input type="date" name="birthday" label="Birthday" />
      <Input type="tel" name="phoneNumber" label="Phone Number" />
      <Input type="email" name="mail" label="Mail" />
      <Input type="text" name="address" label="Address" />
      <Input type="text" name="driveLicence" label="Drive Licence" />
      <FormSubmit />
    </form>
  );
};

export default Identity;
