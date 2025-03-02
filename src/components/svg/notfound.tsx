import * as React from "react";

const NotFoundIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    fill="none"
    viewBox="0 0 61 64"
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m21.555 19.323-2.887-4.455 11.125-7.233 2.887 4.455zm-1.56 7.346-2.89-4.455-2.887-4.455-2.894-4.452 4.453-2.898 11.125-7.23L31.35.286l2.894 4.455 2.887 4.455 2.89 4.455-4.45 2.894-11.124 7.233zm14.373 13.079 5.456 2.784-.321-6.125-.605-11.621-.321-6.123-5.138 3.341-9.749 6.336-5.138 3.34 5.46 2.785zm-.322-6.126-.289-5.495-4.607 2.997zm13.691-2.43h7.958v26.56h-7.958zM61 25.88v37.183H42.432v-37.18zm-43.895 2.247L5.015 63.286 0 61.556l12.09-35.158zm8.08 29.625a6.63 6.63 0 0 0 4.785-1.892 6.64 6.64 0 0 0 1.994-4.747 6.65 6.65 0 0 0-1.994-4.748 6.63 6.63 0 0 0-4.785-1.892 6.63 6.63 0 0 0-4.595 1.996 6.645 6.645 0 0 0 0 9.288 6.63 6.63 0 0 0 4.595 1.995m11.938-6.64a11.96 11.96 0 0 1-3.426 8.577 11.94 11.94 0 0 1-8.51 3.57 11.93 11.93 0 0 1-8.51-3.57 11.96 11.96 0 0 1-3.427-8.578 11.96 11.96 0 0 1 3.565-8.324 11.93 11.93 0 0 1 16.744 0 11.96 11.96 0 0 1 3.564 8.324"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default NotFoundIcon;
