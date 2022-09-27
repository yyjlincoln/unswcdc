import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { CenteredLogo } from "../components/logo";

export const Main: React.FC = () => {
  const navigate = useNavigate();

  const onClickNavigateToAbout = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onClickNavigateToContactUs = useCallback(() => {
    // navigate("/contact-us");
    window.location.href = "mailto:cdc@unswcdc.org";
  }, []);

  return (
    <>
      <div>
        <div className="h-screen w-screen flex-col flex justify-center items-center overflow-hidden">
          <div
            className="h-screen mt-0 absolute left-0 top-0 overflow-hidden"
            style={{
              zIndex: -2,
            }}
            id="background_animate"
          >
            <div className="w-screen h-screen bg-black left-0 top-0 opacity-30 absolute overflow-hidden"></div>
            <img
              className="object-cover w-screen h-screen overflow-hidden"
              src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="background"
            />
          </div>
          <div
            id="title_animate"
            className="relative mx-auto text-center align-middle py-10 space-y-4"
          >
            <CenteredLogo />
            <div className="overflow-hidden">
              <span className="relative text-6xl md:text-7xl lg:text-8xl block text-white overflow-hidden py-1 heading-font">
                我们 不止辩论
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="relative text-2xl md:text-3xl lg:text-4xl block text-white heading-font">
                新南华辩社 · UNSWCDC
              </span>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-sm sm:flex-row sm:w-auto sm:px-auto sm:max-w-lg sm:space-x-4 sm:space-y-0 space-y-4 px-4">
            <AnimatedButton onClick={onClickNavigateToAbout} primary>
              我们是谁
            </AnimatedButton>
            <AnimatedButton onClick={onClickNavigateToContactUs}>
              联系我们
            </AnimatedButton>
          </div>
        </div>
      </div>
    </>
  );
};
