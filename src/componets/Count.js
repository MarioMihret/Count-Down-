import React, { useState, useEffect } from "react";
import "./Count.css";
function Count() {
  const [seconds, setSeconds] = useState(10); // Initial countdown time in seconds
  const [isRunning, setIsRunning] = useState(false); // Flag to track if the countdown is running

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            setIsRunning(false);
            return 10; // Reset the countdown to 60 seconds
          }
          return prevSeconds - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setSeconds(10);
    setIsRunning(false);
  };

  return (
    <div>
      <div>
        <h1 className="title"> Top 10 Count Down</h1>
      </div>
      <div className="container">
        <h1 className="number">{seconds}</h1>{ seconds === 0 ? (<h1>Successfull </h1>) : ""}
        <span className="second">seconds</span>
        {isRunning ? (
          <button className="button" onClick={handlePause}>
            Pause
          </button>
        ) : (
          <button className="button" onClick={handleStart}>
            Start
          </button>
        )}
        <button className="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Count;
