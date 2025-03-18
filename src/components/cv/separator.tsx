import React from 'react';
import { useTheme } from '@/context/theme';

interface SeparatorProps {
    type: string;
}

const Separator: React.FC<SeparatorProps> = (props) => {
    const { type } = props;
    const { theme } = useTheme();
    let borderColor;
    let width;
    let margin;
    let hidden ;
    if (type === 'section') {
        borderColor = `${theme.borderCta}`;
        width = 'w-full';
        margin ='my-5';
        hidden = '';
    } else if (type ==='hideDesktop') {
        borderColor = `${theme.borderCta}`;
        width = 'w-full';
        margin ='my-5';
        hidden = 'md:hidden';
    }
    else {
        borderColor = `${theme.main_color}`;
        width = 'w-3/4';
        margin ='my-3';
        hidden = '';

    }
    return (
        <div className={`flex  ${width} ${hidden} ${margin} opacity-50 border-center border-1 ${borderColor}`}></div>
    );
};

export default Separator;

