import { CancelBtn, Submit } from '@/atoms';
import { Skill } from '@/lib/interfaces';
import { FC, Fragment } from 'react';
import classes from './Footer.module.css';

const Footer: FC<{
  skills: Record<string, Skill[]>;
  formAction: (payload: FormData) => void;
}> = ({ skills, formAction }) => {
  return (
    <div className={classes.skillFooter}>
      <form action={formAction}>
        {Object.values(skills)
          .reduce((acc, skill) => [...acc, ...skill], [])
          .map((skill, index) => (
            <Fragment key={skill.name}>
              <input type="hidden" name={`${index}.category`} value={skill.category} />
              <input type="hidden" name={`${index}.name`} value={skill.name} />
              <input type="hidden" name={`${index}.level`} value={skill.level} />
              <input type="hidden" name={`${index}.is_main`} value={skill.is_main} />
            </Fragment>
          ))}
        <CancelBtn />
        <Submit />
      </form>
    </div>
  );
};

export default Footer;
