import React, { useState } from "react";
import { AnimatedButton } from "../components/AnimatedButton";

export const Main: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

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
              src="https://images.unsplash.com/photo-1488861859915-4b5a5e57649f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="background"
            />
          </div>
          <div
            id="title_animate"
            className="relative mx-auto text-center align-middle py-10"
          >
            <div className="overflow-hidden">
              <span className="relative text-6xl md:text-7xl lg:text-8xl block font-extrabold text-white overflow-hidden py-1">
                What's your identity?
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="mt-3 relative text-2xl md:text-3xl lg:text-4xl block text-white font-extrabold">
                A comprehensive discussion on identity
              </span>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-sm sm:flex-row sm:w-auto sm:px-auto sm:max-w-lg sm:space-x-4 sm:space-y-0 space-y-4">
            <AnimatedButton
              onClick={() => {
                setIsLoading(!isLoading);
              }}
              isLoading={isLoading}
              primary
            >
              Test
            </AnimatedButton>
            <AnimatedButton
              onClick={() => {
                setIsLoading(!isLoading);
              }}
              isLoading={isLoading}
            >
              Test
            </AnimatedButton>
          </div>
          <div className="absolute bottom-10">
            <span className="font-extrabold text-gray-500 relative">
              ⬇️ Learn more
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
