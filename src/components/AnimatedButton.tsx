import React from "react";

interface Props {
  isLoading?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  primary?: boolean;
}

export const AnimatedButton: React.FC<Props> = ({
  isLoading,
  onClick,
  children,
  primary,
}) => {
  const getButtonStyle = () => {
    return (
      "w-full flex items-center cursor-pointer justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md select-none " +
      (primary
        ? "text-white bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-800 md:py-4 md:text-lg md:px-10"
        : "text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10")
    );
  };
  return (
    <>
      <div className="rounded-md shadow" onClick={onClick}>
        <div onClick={(e) => e.preventDefault()} className={getButtonStyle()}>
          {isLoading && (
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          {children}
        </div>
      </div>
    </>
  );
};
