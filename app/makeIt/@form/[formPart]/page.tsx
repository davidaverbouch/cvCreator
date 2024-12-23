import { UpsertIdentity } from '@/actions/upsertIdentity';
import { UpsertSkill } from '@/actions/upsertSkill';
import { Identity, Skills } from '@/components/form';
import { defaultCV } from '@/lib/defaultValues/cv';
import { getUserCV } from '@/lib/methods/cv';
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
  const userCV = getUserCV('David', 'Averbouch') ?? defaultCV;

  return (
    <div className={classes.fromPartWrapper}>
      <div className={classes.overlay} />
      <div className={classes.modal}>
        <div className={classes.titlewrapper}>
          <h1>{formPart}</h1>
        </div>

        {formPart === FormPartEnum.Identity && <Identity action={UpsertIdentity} />}
        {formPart === FormPartEnum.Skills && <Skills action={UpsertSkill} datas={userCV.skills} />}
      </div>
    </div>
  );
};

export default FormPart;
