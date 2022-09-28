import React from "react";
import { Outlet } from "react-router-dom";

export const AppFrame: React.FC = () => {
  return (
    <div
      className="flex flex-col"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Outlet />
    </div>
  );
};
