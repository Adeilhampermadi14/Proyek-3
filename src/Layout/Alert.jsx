import React from "react";

export const Alert = ({ message, status }) => {
  return (
    <div
      className={`w-[250px] py-2 text-[13px]  md:text-[20px] pr-8 px-2 bg-opacity-90 ring-1 ring-white first-letter:uppercase ${
        status ? "bg-green-500" : "bg-red-500"
      }  absolute top-10 right-10 text-white rounded-md animate-fall`}
    >
      {message}
    </div>
  );
};
