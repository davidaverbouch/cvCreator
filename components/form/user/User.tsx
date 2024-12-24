'use client';

import { Action } from '@/actions/interfaces';
import { CancelBtn, Image, Input, Submit, Textarea } from '@/atoms';
import { Face } from '@/components';
import { defaultCV } from '@/lib/defaultValues/cv';
import { UserCV } from '@/lib/interfaces';
import { FC, useActionState } from 'react';
import classes from './User.module.css';

const User: FC<Action & { datas: Partial<UserCV> }> = ({ action, datas }) => {
  const [, formAction] = useActionState(action, null);

  return (
    <div className={classes.userWrapper}>
      <div className={classes.userContainer}>
        <form action={formAction}>
          <Input type="text" name="title" label="title" value={datas.title} />
          <Input type="hidden" name="face" label="face" value={datas.face} />
          <div className={classes.duo}>
            <div className={classes.faceWrapper}>
              <Face face={datas.face ?? defaultCV.face} />
              <Image name="face" />
            </div>
            <div className={classes.descriptionWrapper}>
              <Textarea name="description" label="description" value={datas.description} />
              <Input type="text" name="mindset" label="mindset" value={datas.mindset} />
            </div>
          </div>
          <div className={classes.userFooter}>
            <CancelBtn />
            <Submit />
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;
