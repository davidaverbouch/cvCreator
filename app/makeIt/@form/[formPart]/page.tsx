import { UpsertIdentity } from '@/actions/upsertIdentity';
import { Identity, Skills } from '@/components/form';
import React from 'react';
import classes from './page.module.css';

interface FormPartProps {
  params: Promise<{ formPart: string }>;
}

enum FormPartEnum {
  Identity = 'identity',
  Skills = 'skills',
  Educations = 'educations',
  WorkExperiences = 'workExperiences',
  UserCV = 'userCV',
}

const FormPart: React.FC<FormPartProps> = async ({ params }) => {
  const formPart = (await params).formPart;
  console.log({ formPart });
  return (
    <div className={classes.fromPartWrapper}>
      <div className={classes.overlay} />
      <div className={classes.modal}>
        <h1>modification of {formPart}</h1>

        {formPart === FormPartEnum.Identity && <Identity action={UpsertIdentity} />}
        {formPart === FormPartEnum.Skills && <Skills action={UpsertIdentity} />}
      </div>
    </div>
  );
};

export default FormPart;
