import { Button } from '@/atoms';
import { WorkExperience } from '@/lib/interfaces';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { FC, MouseEvent } from 'react';
import classes from './Companies.module.css';

interface CompaniesProps {
  workExperiences: WorkExperience[];
  handleSelectCompany: (e: MouseEvent, company: number) => void;
  handleAddCompany: () => void;
}

const Companies: FC<CompaniesProps> = ({ workExperiences, handleSelectCompany, handleAddCompany }) => {
  return (
    <div className={classes.companiesWrapper}>
      <h2>Companies</h2>
      <ul className={classes.companies}>
        {workExperiences.map((workExperience, index) => (
          <li key={index}>
            <button onClick={e => handleSelectCompany(e, index)}>
              {!workExperience.company_name ? 'company name' : workExperience.company_name}
            </button>
          </li>
        ))}
      </ul>
      <Button label="Add" icon={<PlaylistAddIcon />} variant="outlined" onClick={handleAddCompany} />
    </div>
  );
};

export default Companies;
