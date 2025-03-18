import { Paragraph } from '@/api/strapiformats';
import React from 'react';

interface SectionProps {
  imageSrc: string;
  text: string;
  reverse?: boolean;
  isFirst?: boolean;
  isSecond?: boolean;
  date: string;
}

const Section: React.FC<SectionProps> = ({ imageSrc, date, text, reverse = false, isFirst = false, isSecond = false }) => {
  return (
    <section className={`flex flex-col md:flex-row w-full justify-center items-center p-2 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    {/* Séparateur mobile*/}
    <div className="w-full md:hidden h-1 my-5 bg-fuchsia-700"></div>
    {/* Première div */}

    <div className="w-full md:w-1/3 flex justify-center items-center">
        <p className="text-3xl p-3 text-bold text-center text-fuchsia-700">{date}</p>
    </div>

    {/* Seconde div (img) */}

      <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
            {isFirst && (
            <>
                <div className="hidden md:block w-7 h-7 rounded-full border-3 border-fuchsia-700"></div>
            </>
            )}
            <div className="w-1 h-15 hidden md:block bg-fuchsia-700"></div>

            {isSecond && (
            <div className="w-1 h-40 hidden md:block bg-fuchsia-700"></div>
            )}

            {!isSecond && (
            <img 
            src={`${process.env.NEXT_PUBLIC_BASE_UPLOADS_URL}${imageSrc}`}
            className='h-2/5  p-5'
            />

            )}
            { !isSecond && (
            <div className="w-1 h-15 hidden md:block bg-fuchsia-700"></div>
            )}
      </div>
        
      {/* Troisième div (texte) */}

      <div className="w-full md:w-1/3 flex flex-col gap-3 justify-center items-start">
        {text.split('\n').map((line, index) => (
            <p key={index} className={`text-md ${line.includes('✅') ? '' : 'text-justify'}`}>{line}</p>
        ))}
      </div>
    </section>
  );
};

export default Section;