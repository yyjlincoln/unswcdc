import React from "react";
import logo from "../assets/logo.png";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const Logo: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <div className={`${className || ""}`}>
      <img src={logo} alt="logo" className="w-32 h-32" />
    </div>
  );
};

export const LargeLogo: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <div className={`${className || ""}`}>
      <img src={logo} alt="logo" className="w-64 h-64" />
    </div>
  );
};

export const CenteredLogo: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${className || ""}`}
    >
      <Logo />
    </div>
  );
};

export const LargeCenteredLogo: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${className || ""}`}
    >
      <LargeLogo />
    </div>
  );
};
