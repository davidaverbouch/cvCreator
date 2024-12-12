'use client';

import { FormSubmit, Input, Textarea } from '@/components/form';
import { useActionState } from 'react';
import classes from './contactForm.module.css';

const ContactForm = ({ action }: { action: (_prevState: any, formData: any) => void }) => {
  const [state, formAction] = useActionState(action, null);

  return (
    <div className={classes.formWrapper}>
      <form action={formAction}>
        <Input id="title" name="title" required label="title" />
        <Textarea id="content" name="content" required label="content" />
        <FormSubmit />
        {state?.errors && <p>{state.errors}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
