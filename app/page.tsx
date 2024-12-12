import Link from 'next/link';
import classes from './page.module.css';

export default function Home() {
  return (
    <main className={classes.mainWrapper}>
      <h1>Make a CV great again</h1>
      <div className={classes.mainLink}>
        <Link href="/makeIt">Create your own CV</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </main>
  );
}
