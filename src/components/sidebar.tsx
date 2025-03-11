import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './logo/logo';
import { HomeIcon, FolderIcon, InformationCircleIcon, EnvelopeIcon, DocumentTextIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import LogoBleu from './logo/logoblue';
import { fetchCV } from '@/api/cv';

interface Link {
  name: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  download?: boolean;
}

const Sidebar: React.FC = () => {
  const [cvURL, setCvURL] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getCvURL = async () => {
      try {
        const cv = await fetchCV();
        setCvURL(cv.document ?? null);
      } catch (error) {
        console.error("Error fetching CV:", error);
      }
    };
    getCvURL();
  }, []);

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
      url: cvURL || '#',
      icon: DocumentTextIcon,
      download: true,
    },
  ];

  return (
    <div className="w-full md:w-1/6">
      <div className="w-full border-r hidden md:flex flex-col justify-start shadow-lg shadow-blue-300/30 items-start sticky top-0 h-screen p-7 bg-linear-to-bl from-blue-900 to-indigo-950">
        <Logo className='w-1/3 mx-auto cursor-pointer mb-2' />
        <ul className="space-y-2 mt-5">
          {links.map((link) => (
            <li key={link.name} className="py-2">
              <Link href={link.url} className="w-1/2 gap-2 text-gray-300 hover:text-white hover:text-lg cursor-pointer hover:text-bold w-full flex flex-row text-start gap-1 justify-start items-center" download={link.download ? true : undefined}>
                <link.icon className='w-8' />
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* // Responsive menu */}
      <div className="md:hidden flex h-20 flex-row shadow-lg shadow-blue-300/30 fixed w-full top-0 justify-between items-center p-2 bg-linear-to-bl from-blue-900 to-indigo-950">
        <img src="./logo.png" className='w-1/5 p-3' />
        <Bars3Icon className="w-8 cursor-pointer text-white" onClick={toggleMenu} />
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col justify-start items-start shadow-lg p-10 shadow-blue-300/30 sticky top-0 bg-linear-to-bl from-blue-900 to-indigo-950">
          <div className='justify-between flex flex-row w-full'>
            <img src="./logo.png" className='w-1/6' />
            <XMarkIcon className="w-8 cursor-pointer text-white" onClick={closeMenu} />
          </div>
          <ul className="space-y-2 mt-5">
            {links.map((link) => (
              <li key={link.name} className="py-2">
                <Link href={link.url} className="w-1/2 gap-2 text-gray-300 hover:text-white hover:text-lg cursor-pointer hover:text-bold w-full flex flex-row text-start gap-1 justify-start items-center" download={link.download ? true : undefined}>
                  <link.icon className='w-8' />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;