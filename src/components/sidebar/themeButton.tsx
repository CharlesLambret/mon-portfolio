import { useState } from "react";
import { useTheme } from '../../context/theme';

export default function CircleButton() {
  const [open, setOpen] = useState(false);
  const { setMode } = useTheme();

  return (
    <div className="mx-auto relative flex items-center justify-center h-auto">
      {/* Boutons apparaissant au-dessus */}
      {open && (
        <div className="absolute top-[-50px] flex space-x-2 transition-opacity duration-300 opacity-100">
          <button className="w-5 h-5 rounded-full bg-blue-500 cursor-pointer " onClick={() => setMode('blue')}></button>
          <button className="w-5 h-5 rounded-full bg-black cursor-pointer " onClick={() => setMode('dark')}></button>
          {/* <button className="w-5 h-5 rounded-full bg-white border cursor-pointer " onClick={() => setMode('light')} ></button> */}
        </div>
      )}
      
      {/* Bouton principal */}
      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-8 rounded-full bg-gradient-to-br from-black via-blue-800 to-white hover:bg-gradient-to-br hover:from-black hover:via-blue-800 hover:to-blue-500 flex items-center  cursor-pointer justify-center shadow-lg"
      >
        
      </button>
    </div>
  );
}