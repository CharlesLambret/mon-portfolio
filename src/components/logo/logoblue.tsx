import * as React from "react";

const LogoBleu: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    fill="none"
    viewBox="0 0 92 91"
  >
    <path fill="url(#a)" d="M41.055 54.57 0 30.245v15.45l41.055 24.33z"></path>
    <path fill="url(#b)" d="M50.945 0 0 30.246v15.45L50.945 15.45z"></path>
    <path fill="url(#c)" d="M0 30.246v15.45l13.031-7.725z"></path>
    <path
      fill="url(#d)"
      d="M50.945 36.282 92 60.612V45.156L50.945 20.832z"
    ></path>
    <path
      fill="url(#e)"
      d="M41.055 90.19 92 60.613V45.156L41.055 74.74z"
    ></path>
    <path fill="url(#f)" d="M92 60.612V45.156L78.962 52.88z"></path>
    <path
      fill="url(#g)"
      d="M50.945 36.282h-9.89l-5.287 8.874 5.287 9.413h9.89l5.77-8.874z"
    ></path>
    <defs>
      <linearGradient
        id="a"
        x1="20.528"
        x2="20.528"
        y1="30.246"
        y2="70.025"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBF7A"></stop>
        <stop offset="0.655" stopColor="#C211A1"></stop>
      </linearGradient>
      <linearGradient
        id="b"
        x1="25.472"
        x2="25.472"
        y1="0"
        y2="45.695"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2F52E0"></stop>
        <stop offset="1" stopColor="#1A2D7A"></stop>
      </linearGradient>
      <linearGradient
        id="c"
        x1="6.516"
        x2="6.516"
        y1="30.246"
        y2="45.695"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1A2D7A"></stop>
        <stop offset="1" stopColor="#3919BB"></stop>
      </linearGradient>
      <linearGradient
        id="d"
        x1="71.472"
        x2="71.472"
        y1="20.832"
        y2="60.612"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBF7A"></stop>
        <stop offset="0.655" stopColor="#C211A1"></stop>
      </linearGradient>
      <linearGradient
        id="e"
        x1="66.528"
        x2="66.528"
        y1="45.156"
        y2="90.191"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2F52E0"></stop>
        <stop offset="1" stopColor="#1A2D7A"></stop>
      </linearGradient>
      <linearGradient
        id="f"
        x1="85.481"
        x2="85.481"
        y1="45.156"
        y2="60.612"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1A2D7A"></stop>
        <stop offset="1" stopColor="#3919BB"></stop>
      </linearGradient>
      <linearGradient
        id="g"
        x1="46.241"
        x2="46.241"
        y1="36.282"
        y2="54.569"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2F52E0"></stop>
        <stop offset="1" stopColor="#1A2D7A"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default LogoBleu;
