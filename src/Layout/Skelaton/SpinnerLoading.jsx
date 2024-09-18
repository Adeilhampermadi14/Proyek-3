import React, { useEffect, useState } from "react";

export const SpinnerLoading = () => {
  const [load, setload] = useState(false);
  useEffect(() => {
    clearTimeout();
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 2000);
    
  }, []);

  return (
    <>
      {load && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50 flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
};
