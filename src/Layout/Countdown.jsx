import React, { useEffect, useState } from 'react';

const Countdown = ({ finalValue,Classvalue,etcValue }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev < finalValue ? prev + 1 : prev));
    },30);

    return () => clearInterval(interval);
  }, [finalValue]);

  return (
    <h1 className={`${Classvalue}`} >
      <span className="animate-countdown">{etcValue}{current}</span>
    </h1>
  );
};

export default Countdown;
