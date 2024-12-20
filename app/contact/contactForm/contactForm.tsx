'use client';

import { Action } from '@/actions/interfaces';
import { FormSubmit, Input, Textarea } from '@/components/form';
import { useActionState } from 'react';
import classes from './contactForm.module.css';

const ContactForm = ({ action }: Action) => {
  const [state, formAction] = useActionState(action, null);

  return (
    <div className={classes.formWrapper}>
      <form action={formAction}>
        <Input id="title" name="title" required label="title" />
        <Textarea id="content" name="content" required label="content" />
        <FormSubmit />
        {state?.error && <p>{state.error}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
