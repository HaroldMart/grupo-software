'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About Us',
    href: '/about-us',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className='nav-links'>
      {links.map((link) => {
        return (
          <li className='link'>
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'a-link',
                {
                  'active': pathname === link.href,
                },
              )}
            >
              <p>{link.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}