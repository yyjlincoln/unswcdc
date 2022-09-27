import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const PageFrame: React.FC<Props> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={`flex flex-col px-8 py-8 w-full h-full ${className || ""}`}
      {...rest}
    >
      {children}
    </div>
  );
};
