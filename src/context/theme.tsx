import React, { createContext, useContext, useState, ReactNode } from 'react';

type Mode = 'light' | 'dark' | 'blue';

interface theme {
  [key: string]: string;
}

const theme: { [mode in Mode]: theme } = {
  light: {
    main_color: 'black-900',
    bg_dark: 'bg-stone-100',
    bg : 'bg-stone-50',
    secondary_text: 'black',
    link_hover: 'text-blue-700',
    ctaColor: 'bg-blue-800',
    borderCta: 'border-blue-800',
    ctaShadow:'shadow-blue-600/30',
    sidebarShadow:'shadow-gray-300/30'
  },
  dark: {
    main_color: 'white',
    bg_dark: 'bg-linear-to-bl from-slate-800 to-zinc-950',
    bg: 'bg-radial-[at_25%_25%] from-gray-900 to-zinc-950 to-75%',
    secondary_text: 'text-white',
    link_hover: 'text-blue-500',
    ctaColor: 'bg-blue-500',
    borderCta: 'border-blue-500',
    ctaShadow:'shadow-blue-300/30',
    sidebarShadow:'shadow-slate-300/30'


  },
  blue: {
    main_color: 'white',
    bg_dark: 'bg-linear-to-bl from-blue-900 to-indigo-950',
    bg: 'bg-radial-[at_25%_25%] from-blue-800 to-blue-950 to-75%',
    secondary_text: 'text-gray-300',
    link_hover: 'text-white',
    ctaColor: 'bg-orange-500',
    borderCta: 'border-orange-500',
    ctaShadow:'shadow-blue-300/30',
    sidebarShadow:'shadow-blue-300/30'

  }
};

interface ThemeContextProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
  theme: theme;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<Mode>('blue');

  const value = {
    mode,
    setMode,
    theme: theme[mode]
  };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};