import React, {  useState } from 'react';
import Link from 'next/link';

import Logo from '../logo/logo';
import { HomeIcon, FolderIcon, InformationCircleIcon, EnvelopeIcon, DocumentTextIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import CircleButton from './themeButton';
import { useTheme } from '../../context/theme';

interface Link {
  name: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  download?: boolean;
}

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const links: Link[] = [
    {
      name: 'Accueil',
      url: '/',
      icon: HomeIcon,
    },
    {
      name: 'Portfolio',
      url: '/projets',
      icon: FolderIcon,
    },
    {
      name: 'A propos',
      url: '/a-propos',
      icon: InformationCircleIcon,
    },
    {
      name: 'Contact',
      url: '/contact',
      icon: EnvelopeIcon,
    },
    {
      name: 'CV',
      url: '/cv' ,
      icon: DocumentTextIcon,
    },
  ];

  return (
    <div className="w-full md:w-1/6 lg:w-1/8">
      <div className={`w-full border-r hidden md:flex flex-col justify-between shadow-lg ${theme.bg_dark} ${theme.sidebarShadow} items-start sticky top-0 h-screen p-7 `}>
        <div className="w-full flex flex-col gap-3">
          <Logo className='w-1/3 mx-auto cursor-pointer mb-2' />
          <ul className="space-y-2 my-5">
            {links.map((link) => (
              <li key={link.name} className="py-2">
                <Link href={link.url} className={`w-1/2 gap-2 ${theme.secondary_text} hover:${theme.link_hover} hover:text-lg cursor-pointer hover:text-bold w-full gap-1 flex flex-row items-center `}>
                  <link.icon className='w-8' />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <CircleButton />
      </div>
      {/* // Responsive menu */}
      <div className={`md:hidden flex h-20 z-90 flex-row shadow-lg ${theme.bg_dark} ${theme.sidebarShadow} fixed w-full top-0 justify-between items-center p-2`}>
        <img src="./logo.png" className='w-1/5 p-3' />
        <Bars3Icon className={`w-8 cursor-pointer text-${theme.main_color}`} onClick={toggleMenu} />
      </div>
      {isOpen && (
        <div className={`md:hidden flex z-90 w-full flex-col justify-between items-start shadow-lg ${theme.bg_dark} ${theme.sidebarShadow} p-10 fixed top-0 `}>
          <div className='justify-between flex flex-row w-full'>
            <img src="./logo.png" className='w-1/6' />
            <XMarkIcon className={`w-8 cursor-pointer text-${theme.main_color}`} onClick={closeMenu} />
          </div>
          <ul className="space-y-2 mt-5 mx-auto py-5">
            {links.map((link) => (
              <li key={link.name} className="py-2">
                <Link href={link.url} className={`w-1/2 gap-2 ${theme.secondary_text} hover:text-white hover:text-lg cursor-pointer hover:text-bold w-full flex flex-row items-center  gap-1 `}>
                  <link.icon className='w-8' />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <CircleButton />

        </div>
      )}
   
    </div>
  );
};

export default Sidebar;