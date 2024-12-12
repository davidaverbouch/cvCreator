import { ContactMe } from '@/actions/contact';
import ContactForm from './contactForm/contactForm';
import classes from './page.module.css';

const Contact = () => {
  return (
    <div className={classes.contactWrapper}>
      <h1>Contact</h1>
      <ContactForm action={ContactMe} />
    </div>
  );
};

export default Contact;
