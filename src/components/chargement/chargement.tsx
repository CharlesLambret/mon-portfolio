import { useState, useEffect } from "react";
import LogoBlanc from "../logo/logoblanc";
import LogoBordure from "../logo/logobordure";

export default function ChargementComponent() {
    const [showBlanc, setShowBlanc] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowBlanc(prev => !prev);
        }, 5);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            {showBlanc ? (
                <LogoBlanc className="w-20 h-20 animate-pulse" />
            ) : (
                <LogoBordure className="w-20 h-20 animate-pulse" />
            )}
            <p className="txt-xl text-white text-center">Chargement de la page en cours...</p>
        </div>
    );
}