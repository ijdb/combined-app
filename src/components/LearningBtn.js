import React from "react";

function LearningBtn({ handleClick }) {
  return (
    <button className="learning-btn" onClick={handleClick}>
      Learnings
    </button>
  );
}

export default LearningBtn;
