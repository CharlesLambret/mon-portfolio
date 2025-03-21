import { useState, useEffect } from "react";
import LogoBlanc from "../logo/logoblanc";
import LogoBordure from "../logo/logobordure";
import {  useTheme} from '../../context/theme';

export default function ChargementComponent() {
    const [showBlanc, setShowBlanc] = useState(true);
  const { theme } = useTheme();
    useEffect(() => {
        const interval = setInterval(() => {
            setShowBlanc(prev => !prev);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="my-5 md:my-0 w-full h-full flex flex-col justify-center items-center">
            {showBlanc ? (
                <LogoBlanc className="w-20 h-20 animate-pulse" />
            ) : (
                <LogoBordure className="w-20 h-20 animate-pulse" />
            )}
            <p className={`txt-xl text-${theme.main_color} text-center`}>Chargement de la page en cours...</p>
        </div>
    );
}