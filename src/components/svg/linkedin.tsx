import * as React from "react";

const LinkedinIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    fill="none"
    viewBox="0 0 32 33"
  >
    <path
      fill="#fff"
      d="M30.72.343H1.28C.572.343 0 .915 0 1.623v29.44c0 .708.572 1.28 1.28 1.28h29.44c.708 0 1.28-.572 1.28-1.28V1.623c0-.708-.572-1.28-1.28-1.28M9.492 27.611H4.744V12.34h4.748zM7.12 10.251a2.752 2.752 0 1 1 0-5.503 2.752 2.752 0 0 1 0 5.503m20.148 17.36h-4.744v-7.428c0-1.772-.032-4.048-2.468-4.048-2.468 0-2.848 1.928-2.848 3.92v7.556h-4.74V12.34h4.552v2.088h.064c.632-1.2 2.18-2.468 4.492-2.468 4.808 0 5.692 3.164 5.692 7.276z"
    ></path>
  </svg>
);

export default LinkedinIcon;
