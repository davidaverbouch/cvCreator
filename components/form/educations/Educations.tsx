'use client';

import { Action } from '@/actions/interfaces';
import { CancelBtn, Submit } from '@/atoms';
import { Education } from '@/lib/interfaces';
import { FC } from 'react';
import classes from './Educations.module.css';
import { EducationsList } from './educationsList';
import { NewItem } from './newItem';
import { useEducations } from './useEducations';

const Educations: FC<Action & { datas: Education[] }> = ({ action, datas }) => {
  const {
    formAction,
    errors,
    educations,
    newEducation,
    handleSetNewEducation,
    handleAddEducation,
    handleUpdateEducation,
  } = useEducations({
    action,
    datas,
  });

  return (
    <div className={classes.educationsWrapper}>
      <div className={classes.educationsContainer}>
        <form action={formAction}>
          <EducationsList educations={educations} handleUpdateEducations={handleUpdateEducation} />
          <NewItem
            errors={errors}
            newEducation={newEducation}
            handleSetNewEducation={handleSetNewEducation}
            handleAddEducation={handleAddEducation}
          />
          <div className={classes.educationsFooter}>
            <CancelBtn />
            <Submit />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Educations;
