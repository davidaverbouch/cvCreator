import { UpsertEducation } from '@/actions/upsertEducation';
import { UpsertIdentity } from '@/actions/upsertIdentity';
import { UpsertSkill } from '@/actions/upsertSkill';
import { UpsertUser } from '@/actions/upsertUser';
import { UpsertWorkExperiences } from '@/actions/upsertWorkExperiences';
import { EditIdentity, EditSkills, EditUser } from '@/components';
import { EditEducations } from '@/components/form/educations';
import { EditWorkExperiences } from '@/components/form/workExperiences';
import { defaultCV } from '@/lib/defaultValues/cv';
import { defaultUser } from '@/lib/defaultValues/user';
import { getUserCV } from '@/lib/methods/cv';
import { getUser } from '@/lib/methods/user';
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
  User = 'user',
}

const FormPart: React.FC<FormPartProps> = async ({ params }) => {
  const formPart = (await params).formPart;
  const userCV = getUserCV('David', 'Averbouch') ?? defaultCV;
  const user = getUser({ firstName: 'David', lastName: 'Averbouch' }) ?? defaultUser;

  return (
    <div className={classes.fromPartWrapper}>
      <div className={classes.overlay} />
      <div className={classes.modal}>
        <div className={classes.titlewrapper}>
          <h1>{formPart}</h1>
        </div>

        {formPart === FormPartEnum.User && (
          <EditUser
            action={UpsertUser}
            datas={{ description: userCV.description, face: userCV.face, mindset: userCV.mindset, title: userCV.title }}
          />
        )}
        {formPart === FormPartEnum.Identity && <EditIdentity action={UpsertIdentity} datas={user} />}
        {formPart === FormPartEnum.Skills && <EditSkills action={UpsertSkill} datas={userCV.skills} />}
        {formPart === FormPartEnum.Educations && <EditEducations action={UpsertEducation} datas={userCV.educations} />}
        {formPart === FormPartEnum.WorkExperiences && (
          <EditWorkExperiences action={UpsertWorkExperiences} datas={userCV.workExperiences} />
        )}
      </div>
    </div>
  );
};

export default FormPart;
