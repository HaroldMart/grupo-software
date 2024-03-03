'use client'

// import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import clsx from 'clsx';

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
        name: 'Our Team',
        href: '/our-team',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <div>
            Nav Links(compoment)
        </div>
        // <>
        //   {links.map((link) => {
        //     return (
        //       <Link
        //         key={link.name}
        //         href={link.href}
        //         className={clsx(
        //           'link',
        //           {
        //             'active': pathname === link.href,
        //           },
        //         )}
        //       >
        //         <p>{link.name}</p>
        //       </Link>
        //     );
        //   })}
        // </>
    );
}