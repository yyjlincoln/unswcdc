import React from "react";
import { PageFrame } from "./PageFrame";
import { Link } from "react-router-dom";
import { LargeCenteredLogo } from "../components/logo";

export const NotFound: React.FC = () => {
  return (
    <PageFrame>
      <div className="flex flex-col justify-center items-center text-center w-full h-full space-y-4">
        <LargeCenteredLogo />
        <div>We could not find the page that you are looking for.</div>
        <Link to="/" className="underline">
          Go home
        </Link>
      </div>
    </PageFrame>
  );
};
