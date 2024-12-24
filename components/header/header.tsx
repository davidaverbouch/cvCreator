import { SelectableLink } from '@/atoms';
import classes from './header.module.css';

const Header = () => {
  return (
    <>
      <header className={classes.menu}>
        <nav className={classes.links}>
          <ul className={classes.list}>
            <SelectableLink href="/" label="David Averbouch" />
            <SelectableLink href="/makeIt" label="Create your CV" />
            <SelectableLink href="/about" label="About" />
            <SelectableLink href="/contact" label="Contact" />
          </ul>
        </nav>
      </header>
      <div className={classes.headerBlock} />
    </>
  );
};

export default Header;
