'use client';

import { Action } from '@/actions/interfaces';
import { WorkExperience } from '@/lib/interfaces';
import { FC } from 'react';
import { Companies } from './companies';
import { Company } from './company';
import { Footer } from './footer';
import { useWorkExperiences } from './useWorkExperiences';
import classes from './WorkExperiences.module.css';

const WorkExperiences: FC<Action & { datas: WorkExperience[] }> = ({ action, datas }) => {
  const { formAction, workExperiences, currentCompany, handleSelectCompany, handleAddCompany, handleUpdateSkill } =
    useWorkExperiences({ action, datas });

  return (
    <div className={classes.workExperiencesWrapper}>
      <Companies
        workExperiences={workExperiences}
        handleSelectCompany={handleSelectCompany}
        handleAddCompany={handleAddCompany}
      />
      <hr />
      <div className={classes.workExperiencesContainer}>
        <h2>{workExperiences[currentCompany].company_name}</h2>
        <Company
          workExperiences={workExperiences[currentCompany]}
          index={currentCompany}
          handleUpdateSkill={handleUpdateSkill}
        />
        {/* <NewItem newSkill={newSkill} setNewSkill={setNewSkill} handleAddSkill={handleAddSkill} /> */}
      </div>
      <Footer workExperiences={workExperiences} formAction={formAction} />
    </div>
  );
};

export default WorkExperiences;
