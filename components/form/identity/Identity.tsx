'use client';

import { Action } from '@/actions/interfaces';
import { CancelBtn, Submit } from '@/atoms';
import { User } from '@/lib/interfaces';
import { FC, useActionState } from 'react';
import { Input } from '../../../atoms/form/input';
import classes from './Identity.module.css';

const Identity: FC<Action & { datas: User }> = ({ action, datas }) => {
  const [, formAction] = useActionState(action, null);

  return (
    <div className={classes.identityWrapper}>
      <div className={classes.identityContainer}>
        <form action={formAction}>
          <div className={classes.trio}>
            <Input type="text" name="sex" label="Sex" value={datas.sex} />
            <Input type="text" name="firstName" label="First Name" value={datas.firstName} />
            <Input type="text" name="lastName" label="Last Name" value={datas.lastName} />
          </div>
          <div className={classes.trio}>
            <Input type="date" name="birthday" label="Birthday" value={datas.birthday.toLocaleDateString('fr-CA')} />
            <Input type="tel" name="phone" label="Phone Number" value={datas.phone} />
            <Input type="email" name="email" label="Mail" value={datas.email} />
          </div>
          <div className={classes.duo}>
            <Input type="text" name="address" label="Address" value={datas.address} />
            <Input type="text" name="driveLicence" label="Drive Licence" value={datas.driveLicence} />
          </div>
          <div className={classes.identityFooter}>
            <CancelBtn />
            <Submit />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Identity;
