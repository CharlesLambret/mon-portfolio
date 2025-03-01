import * as React from "react";

const VecteurSolo: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    fill="none"
    viewBox="0 0 80 47"
  >
    <path
      fill="url(#a)"
      d="M39.575 46.676a16.16 16.16 0 0 1-8.153-2.196l-29.1-16.954a4.45 4.45 0 0 1-2.219-3.868c0-1.614.821-3.053 2.219-3.868l29.1-16.954a16.17 16.17 0 0 1 16.293 0l29.1 16.954a4.43 4.43 0 0 1 2.218 3.868 4.42 4.42 0 0 1-2.218 3.868l-29.1 16.954a16.1 16.1 0 0 1-8.154 2.196zm0-43.331c-2.348 0-4.71.61-6.814 1.832L3.661 22.13a1.75 1.75 0 0 0-.864 1.527c0 .305.086 1.061.864 1.527l29.1 16.954a13.56 13.56 0 0 0 13.614 0l29.1-16.954c.792-.465.864-1.222.864-1.527s-.086-1.062-.864-1.527l-29.1-16.954a13.54 13.54 0 0 0-6.814-1.832z"
    ></path>
    <defs>
      <linearGradient
        id="a"
        x1="0.117"
        x2="79.033"
        y1="23.658"
        y2="23.658"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E39A65"></stop>
        <stop offset="1" stopColor="#E95F8D"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default VecteurSolo;
