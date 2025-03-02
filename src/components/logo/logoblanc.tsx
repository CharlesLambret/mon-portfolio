import * as React from "react";

const LogoBlanc: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    fill="none"
    viewBox="0 0 92 91"
  >
    <path stroke="#fff" d="M40.555 69.339.5 45.6V31.314l40.055 23.731z"></path>
    <path stroke="#fff" d="M.5 45.008V30.721L50.445 1.07v14.287z"></path>
    <path
      stroke="#fff"
      d="m.5 31.314 11.55 6.847L.5 45.01zM51.445 21.9 91.5 45.633v14.293L51.445 36.188z"
    ></path>
    <path
      stroke="#fff"
      d="M91.5 60.515 41.555 89.513V75.22L91.5 46.215z"
    ></path>
    <path
      stroke="#fff"
      d="M79.943 53.072 91.5 46.224v13.701zM36.346 45.354l4.994-8.381h9.325l5.458 8.905-5.45 8.382h-9.325z"
    ></path>
  </svg>
);

export default LogoBlanc;
