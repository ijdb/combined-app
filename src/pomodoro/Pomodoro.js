import React, { useEffect, useState } from "react";
import "./pomodoro.css";
import LearningBtn from "../components/LearningBtn";
import Learnings from "../components/Learnings";
import pomLearning from "./pomLearning";

function Pomodoro() {
  const [timer, setTimer] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  const handlePause = () => {
    setIsActive(false);
    setIsPaused(true);
  };
  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimer(25 * 60);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")} : ${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="pom-body">
      <LearningBtn handleClick={() => setShowBtn(!showBtn)} />
      {showBtn &&<Learnings learnData={pomLearning} />}
      <div className="pom-container">
        <div className="pom-title">Pomodoro Timer</div>
        <div className="timer">{formatTime(timer)}</div>
        <div className="pom-buttons">
          {!isActive && !isPaused ? (
            <button onClick={handleStart}>Start</button>
          ) : isPaused ? (
            <button onClick={handleStart}>Resume</button>
          ) : (
            <button onClick={handlePause}>Pause</button>
          )}
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
