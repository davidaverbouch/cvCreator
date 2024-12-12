'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './selectableLink.module.css';

const SelectableLink = ({ href, label }: { href: string; label: string }) => {
  const pathName = usePathname();

  return (
    <li className={`${classes.listItem} ${pathName === href && classes.selected}`}>
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default SelectableLink;
