import Image from "next/image";
import React from "react";
import PP from "../../public/bg.jpg";

function LoadingScreen() {
  return (
    <>
      <Image
        src={PP}
        alt=""
        width={480}
        height={480}
        className="h-screen w-screen -z-20 absolute top-0 left-0"
      />
      <div className="flex flex-col items-center justify-center h-screen bg-blue-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40">
        <div className="flex flex-col items-center justify-center z-30">
          {/* <svg
            className="animate-spin h-16 w-16 text-gray-800 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-50 text-gray-200"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.373A8 8 0 0112 4v4c-2.268 0-4.373.775-6.032 2.073l1.528 1.528zm12-1.528C20.373 16 24 10.627 24 4h-4a8.002 8.002 0 01-7.468 7.995l1.528-1.528A6.002 6.002 0 0020 6v6zm-1.528 1.528C17.627 19.627 12.254 24 6 24v-4a8.002 8.002 0 007.995-7.468l1.528 1.528zM4 13.627A6.002 6.002 0 006 20h6a6.002 6.002 0 005.473-3.995l-1.528-1.528A8.002 8.002 0 019.995 18V12H4v1.627z"
            ></path>
          </svg> */}
          <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-400 animate-spin absolute"></div>
          <p className="text-gray-300 mt-24">Loading...</p>
        </div>
      </div>
      <div className="absolute bottom-3 py-1 px-2 right-5 text-sm bg-gray-500/10 bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-10 rounded-sm text-white/30 text-opacity-20">
        Photo by{" "}
        <a href="https://unsplash.com/@steve_j?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Steve Johnson
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/abstract-art-painting-eVaxJVA2zHI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </div>
    </>
  );
}

export default LoadingScreen;
