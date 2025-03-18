import React from 'react';
import { useTheme } from '@/context/theme';
interface SectionProps {
  imageSrc: string;
  text: string;
  reverse?: boolean;
  isFirst?: boolean;
  isSecond?: boolean;
  date: string;
}

const Section: React.FC<SectionProps> = ({ imageSrc, date, text, reverse = false, isFirst = false, isSecond = false }) => {
  const {theme} = useTheme();
  return (
    <section className={`flex flex-col md:flex-row w-full justify-center items-center p-2 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    {/* Séparateur mobile*/}
    <div className={`w-full md:hidden h-1 my-5 bg-${theme.main_color}`}></div>
    {/* Première div */}

    <div className={`w-full md:w-1/3 flex justify-center items-center`}>
        <p className={`text-3xl p-3 text-bold text-center text-${theme.main_color}`}>{date}</p>
    </div>

    {/* Seconde div (img) */}

      <div className={`w-full md:w-1/3 flex flex-col justify-center items-center`}>
            {isFirst && (
            <>
                <div className={`hidden md:block w-7 h-7 rounded-full border-3 border-${theme.main_color}`}></div>
            </>
            )}
            <div className={`w-1 h-15 hidden md:block bg-${theme.main_color}`}></div>

            {isSecond && (
            <div className={`w-1 h-40 hidden md:block bg-${theme.main_color}`}></div>
            )}

            {!isSecond && (
            <img 
            src={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${imageSrc}`}
            className='w-3/4 md:w-1/2  rounded-lg p-5'
            />

            )}
            { !isSecond && (
            <div className={`w-1 h-15 hidden md:block bg-${theme.main_color}`}></div>
            )}
      </div>
        
      {/* Troisième div (texte) */}

      <div className={`w-full md:w-1/3 flex flex-col gap-3 justify-center items-start`}>
        {text.split('\n').map((line, index) => (
            <p key={index} className={`text-md ${line.includes('✅') ? '' : 'text-justify'}`}>{line}</p>
        ))}
      </div>
    </section>
  );
};

export default Section;