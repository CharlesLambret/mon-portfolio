import React from 'react';

interface SideContentProps {
    title: string;
    texts: string[];
}

const SideContentComponent: React.FC<SideContentProps> = ({ title, texts }) => {
    return (
        <div className="flex flex-col gap-2">
            <h5 className="text-xl text-center md:text-start font-bold py-3">{title}</h5>
            {texts && texts.map((text, index) => (
                <p key={index} className="font-sm text-center md:text-start ">{text}</p>
            ))}
        </div>
    );
};

export default SideContentComponent;