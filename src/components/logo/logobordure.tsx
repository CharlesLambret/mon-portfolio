import * as React from "react";

const LogoBordure: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    fill="none"
    viewBox="0 0 92 91"
  >
    <path
      stroke="url(#a)"
      d="M40.555 69.148.5 45.41V31.123l40.055 23.731z"
    ></path>
    <path stroke="url(#b)" d="M.5 44.817V30.53L50.445.878v14.287z"></path>
    <path stroke="url(#c)" d="m.5 31.123 11.55 6.848L.5 44.818z"></path>
    <path
      stroke="url(#d)"
      d="M51.445 21.71 91.5 45.44v14.294L51.445 35.997z"
    ></path>
    <path
      stroke="url(#e)"
      d="M91.5 60.324 41.555 89.323V75.029L91.5 46.024z"
    ></path>
    <path stroke="url(#f)" d="M79.943 52.88 91.5 46.034v13.701z"></path>
    <path
      stroke="url(#g)"
      d="m36.346 45.163 4.994-8.381h9.325l5.458 8.905-5.45 8.382h-9.325z"
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

export default LogoBordure;
