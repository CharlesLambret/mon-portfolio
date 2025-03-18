// filepath: c:\Users\charl\Documents\Dev\siteperso\portfolio\src\components\cv\experience.tsx
import { useTheme } from '@/context/theme';
import React from 'react';

interface ExperienceItemProps {
    Poste: string;
    Entreprise: string;
    Periode: string;
    description: string;
    motsclefs: { id: number; mot: string }[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ Poste, Entreprise, Periode, description, motsclefs }) => {
    const { theme } = useTheme();
    return (
        <div className="flex flex-col w-full gap-2">
            <h6 className="font-bold text-lg text-center md:text-start ">{Poste} - {Entreprise}</h6>
            <p className="italic text-center md:text-start">{Periode}</p>
            <p className=" text-justify">{description}</p>
            <div className="flex flex-row flex-wrap w-full">
                {motsclefs && motsclefs.map((motclef, index) => (
                    <span key={motclef.id} className={`${theme.secondary_text} w-max-content`}>{index > 0 && ", "}{motclef.mot}</span>
                ))}
            </div>
           
        </div>
    );
};

export default ExperienceItem;