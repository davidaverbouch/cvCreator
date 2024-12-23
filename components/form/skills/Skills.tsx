'use client';

import { Action } from '@/actions/interfaces';
import { Skill } from '@/lib/interfaces';
import { FC } from 'react';
import { CategoryList } from './categoryList';
import { Footer } from './footer';
import { NewItem } from './newItem';
import classes from './Skills.module.css';
import { SkillsList } from './skillsList';
import { useSkills } from './useSkills';

const Skills: FC<Action & { datas: Skill[] }> = ({ action, datas }) => {
  const {
    formAction,
    newCategory,
    setNewCategory,
    newSkill,
    setNewSkill,
    skills,
    currentCategory,
    handleSelectCategory,
    handleAddCategory,
    handleAddSkill,
    handleUpdateSkill,
  } = useSkills({ action, datas });

  return (
    <div className={classes.skillWrapper}>
      <CategoryList
        skills={skills}
        newCategory={newCategory}
        setNewCategory={setNewCategory}
        handleSelectCategory={handleSelectCategory}
        handleAddCategory={handleAddCategory}
      />
      <hr />
      <div className={classes.skillContainer}>
        <h2>{currentCategory}</h2>
        <SkillsList skills={skills} currentCategory={currentCategory} handleUpdateSkill={handleUpdateSkill} />
        <NewItem newSkill={newSkill} setNewSkill={setNewSkill} handleAddSkill={handleAddSkill} />
      </div>
      <Footer skills={skills} formAction={formAction} />
    </div>
  );
};

export default Skills;
