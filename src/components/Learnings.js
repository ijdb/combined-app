import React from "react";

function Learnings({ learnData }) {
  return (
    <div className="learn-list">
      <div className="learning-title">My Learnings...</div>
      {learnData.map((item, index) => (
        <ul key={index}>
          <li>{item}</li>
        </ul>
      ))}
    </div>
  );
}

export default Learnings;
