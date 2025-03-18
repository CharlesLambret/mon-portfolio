// filepath: c:\Users\charl\Documents\Dev\siteperso\portfolio\src\components\cv\formation.tsx
import { useTheme } from '@/context/theme';
import React from 'react';

interface FormationProps {
    title: string;
    institution: string;
    duration: string;
}

const FormationComponent: React.FC<FormationProps> = ({ title, institution, duration }) => {
    const { theme } = useTheme();
    return (
        <div className="flex flex-col gap-2">
            <h6 className="font-bold text-center md:text-start">{title}</h6>
            <div className="flex flex-col md:flex-row gap-2">
                <p className="font-medium text-center md:text-start">{institution}</p>
                <p className={`${theme.secondary_text} text-center md:text-start`}>{duration}</p>
            </div>
        </div>
    );
};

export default FormationComponent;