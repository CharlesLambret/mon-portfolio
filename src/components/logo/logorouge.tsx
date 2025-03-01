import * as React from "react";

const LogoRouge: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    fill="none"
    viewBox="0 0 92 92"
  >
    <path fill="url(#a)" d="M41.055 55.378 0 31.055v15.45l41.055 24.33z"></path>
    <path fill="url(#b)" d="M50.945.809 0 31.055v15.45l50.945-30.246z"></path>
    <path fill="url(#c)" d="M0 31.055v15.45l13.031-7.726z"></path>
    <path
      fill="url(#d)"
      d="M50.945 37.091 92 61.421V45.965L50.945 21.64z"
    ></path>
    <path fill="url(#e)" d="M41.055 91 92 61.42V45.966L41.055 75.55z"></path>
    <path fill="url(#f)" d="M92 61.42V45.966L78.962 53.69z"></path>
    <path
      fill="url(#g)"
      d="M50.945 37.091h-9.89l-5.287 8.874 5.287 9.413h9.89l5.77-8.874z"
    ></path>
    <defs>
      <linearGradient
        id="a"
        x1="20.528"
        x2="20.528"
        y1="31.055"
        y2="70.834"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2F52E0"></stop>
        <stop offset="1" stopColor="#1A2D7A"></stop>
      </linearGradient>
      <linearGradient
        id="b"
        x1="25.472"
        x2="25.472"
        y1="0.809"
        y2="46.504"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBF7A"></stop>
        <stop offset="0.655" stopColor="#C211A1"></stop>
      </linearGradient>
      <linearGradient
        id="c"
        x1="6.516"
        x2="6.516"
        y1="31.055"
        y2="46.504"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1A2D7A"></stop>
        <stop offset="1" stopColor="#3919BB"></stop>
      </linearGradient>
      <linearGradient
        id="d"
        x1="71.472"
        x2="71.472"
        y1="21.641"
        y2="61.421"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2F52E0"></stop>
        <stop offset="1" stopColor="#1A2D7A"></stop>
      </linearGradient>
      <linearGradient
        id="e"
        x1="66.528"
        x2="66.528"
        y1="45.965"
        y2="91"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBF7A"></stop>
        <stop offset="0.655" stopColor="#C211A1"></stop>
      </linearGradient>
      <linearGradient
        id="f"
        x1="85.481"
        x2="85.481"
        y1="45.965"
        y2="61.421"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1A2D7A"></stop>
        <stop offset="1" stopColor="#3919BB"></stop>
      </linearGradient>
      <linearGradient
        id="g"
        x1="46.241"
        x2="46.241"
        y1="37.091"
        y2="55.378"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBF7A"></stop>
        <stop offset="0.655" stopColor="#C211A1"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default LogoRouge;
