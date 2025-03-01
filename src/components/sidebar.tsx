import React, { JSX, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './logo/logo';
import { HomeIcon } from '@heroicons/react/24/outline';
import { FolderIcon, InformationCircleIcon, EnvelopeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

interface Link {
  name: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Sidebar: React.FC = () => {
  const router = useRouter();

  const links: Link[] = [
    {
      name: 'Accueil',
      url: '/',
      icon : HomeIcon,
    },
    {
        name: 'Portfolio',
        url: '/projets',
        icon : FolderIcon,
      },
        {
            name: 'A propos',
            url: '/a-propos',
            icon : InformationCircleIcon,
        },
        {
            name: 'Contact',
            url: '/contact',
            icon : EnvelopeIcon,
        },
        {
            name: 'CV',
            url: '/cv',
            icon : DocumentTextIcon,
        },
  ];


  return (
    <div className="w-1/6 border-r flex-col justify-center shadow-lg shadow-blue-300/30 items-center sticky top-0 h-screen p-7 bg-linear-to-bl from-blue-900 to-indigo-950">
      <Logo className='w-1/3 mx-auto cursor-pointer mb-2'/>
      <ul className="space-y-2 mt-5">
        {links.map((link) => (
          <li key={link.name} className="py-2">
              <Link href={link.url} className=" w-1/2 gap-2 text-gray-300 hover:text-white hover:text-lg cursor-pointer hover:text-bold w-full flex flex-row text-start gap-1 justify-start items-center ">
                <link.icon className='w-8' />
                {link.name}
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;