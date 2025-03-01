import LogoBleu from "./logobleu";
import LogoRouge from "./logorouge";
import { useState } from "react";
interface LogoProps {
    className?: string;
}

export default function Logo(props: LogoProps) {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const className = props.className;
    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? <LogoRouge className={className} /> : <LogoBleu className={className} />}
        </div>
    );
}