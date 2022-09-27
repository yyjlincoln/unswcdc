import React from "react";
import logo from "../assets/logo.png";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const Logo: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <div className={`${className || ""}`}>
      <img src={logo} alt="logo" className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" />
    </div>
  );
};

export const MediumLogo: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <div className={`${className || ""}`}>
      <img src={logo} alt="logo" className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48" />
    </div>
  );
};

export const LargeLogo: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <div className={`${className || ""}`}>
      <img src={logo} alt="logo" className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64" />
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

export const MediumCenteredLogo: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${className || ""}`}
    >
      <MediumLogo />
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
