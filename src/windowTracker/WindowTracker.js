import React, { useState } from "react";
import "./wtracker.css";
import Tracker from "./Tracker";
import LearningBtn from "../components/LearningBtn";
import Learnings from "../components/Learnings";
import trackerLearning from "./trackerLearning";

function WindowTracker() {
  const [show, setShow] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  function toggle() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <div className="window-container">
      <LearningBtn handleClick={() => setShowBtn(!showBtn)} />
      {showBtn && <Learnings learnData={trackerLearning} />}
      <button className="tracker-btn" onClick={toggle}>
        Toggle WindowTracker
      </button>
      {show && <Tracker />}
    </div>
  );
}

export default WindowTracker;
