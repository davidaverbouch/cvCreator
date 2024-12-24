import { Input } from '@/atoms/form/input';
import { WorkExperience } from '@/lib/interfaces';
import { FC, useEffect, useState } from 'react';
import { Checkbox } from '../../../../atoms/form/checkbox';
import classes from './Company.module.css';

interface CompanyProps {
  workExperiences: WorkExperience;
  index: number;
  handleUpdateSkill: (index: number, key: string, value: string | number) => void;
}

const Company: FC<CompanyProps> = ({ workExperiences, index, handleUpdateSkill }) => {
  const [isESNVisible, setIsESNVisible] = useState(workExperiences.is_esn === 1);
  const handleSelectEsn = (val: boolean) => {
    const checked = val ? 1 : 0;
    handleUpdateSkill(index, 'is_esn', checked);
    setIsESNVisible(val);
  };

  useEffect(() => {
    setIsESNVisible(workExperiences.is_esn === 1);
  }, [workExperiences.is_esn]);

  return (
    <div className={classes.companyWrapper}>
      <div className={`${classes.company} ${isESNVisible ? classes.esnVisible : ''}`}>
        <div className={classes.companyName}>
          <Input
            type="text"
            name={`${index}.company_name[0]`}
            value={workExperiences.company_name}
            label="Company name"
            onChange={val => handleUpdateSkill(index, 'company_name', val)}
          />
        </div>
        <div className={classes.esn}>
          <Checkbox
            name={`${index}.is_esn[0]`}
            checked={workExperiences.is_esn === 1}
            label="ESN"
            onChange={handleSelectEsn}
          />
          {isESNVisible && (
            <Input
              type="text"
              name={`${index}.esn_name[0]`}
              value={`${workExperiences.esn_name}`}
              label="ESN name"
              onChange={val => handleUpdateSkill(index, 'esn_name', val)}
            />
          )}
        </div>
      </div>
      <div className={classes.title}>
        <Input
          type="text"
          name={`${index}.title[0]`}
          value={`${workExperiences.title}`}
          label="Title"
          onChange={val => handleUpdateSkill(index, 'title', val)}
        />
        <Input
          type="number"
          name={`${index}.year[0]`}
          value={workExperiences.year}
          label="year"
          onChange={val => handleUpdateSkill(index, 'year', val)}
        />
        <Input
          type="number"
          name={`${index}.duration[0]`}
          value={`${workExperiences.duration}`}
          label="duration"
          onChange={val => handleUpdateSkill(index, 'duration', val)}
        />
      </div>
    </div>
  );
};

export default Company;
