'use client';

import { Action } from '@/actions/interfaces';
import React, { useActionState } from 'react';
import { Checkbox } from '../checkbox';
import { FormSubmit } from '../formSubmit';
import { Input } from '../input';
import classes from './Skills.module.css';

const Skills: React.FC<Action> = ({ action }) => {
  const [state, formAction] = useActionState(action, undefined);

  console.log({ state });
  return (
    <form action={formAction}>
      <div className={classes.skill}>
        <Input type="text" name="category" label="category" />
        <Input type="text" name="name" label="name" />
        <Input type="text" name="level" label="level" />
        <Checkbox name="is_main" label="main" />
      </div>
      <FormSubmit />
    </form>
  );
};

export default Skills;
