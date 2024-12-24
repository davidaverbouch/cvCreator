import { CancelBtn, Submit } from '@/atoms';
import { WorkExperience } from '@/lib/interfaces';
import { FC, Fragment } from 'react';
import classes from './Footer.module.css';

const Footer: FC<{
  workExperiences: WorkExperience[];
  formAction: (payload: FormData) => void;
}> = ({ workExperiences, formAction }) => {
  return (
    <div className={classes.skillFooter}>
      <form action={formAction}>
        {workExperiences.map((workExperience, index) => (
          <Fragment key={`${index}_${workExperience.company_name}_${workExperience.year}`}>
            <input type="hidden" name={`${index}.company_name`} value={workExperience.company_name} />
            <input type="hidden" name={`${index}.is_esn`} value={workExperience.is_esn} />
            <input type="hidden" name={`${index}.esn_name`} value={workExperience.esn_name ?? undefined} />
            <input type="hidden" name={`${index}.year`} value={workExperience.year} />
            <input type="hidden" name={`${index}.duration`} value={workExperience.duration} />
            <input type="hidden" name={`${index}.title`} value={workExperience.title} />
          </Fragment>
        ))}
        <CancelBtn />
        <Submit />
      </form>
    </div>
  );
};

export default Footer;
