import React, { useState } from "react";
import "./flipBox.css";
import boxes from "./boxes";
import Box from "./Box";
import Learnings from "../components/Learnings";
import flipBoxLearning from "./flipBoxLearning";
import LearningBtn from "../components/LearningBtn";

function FlipBox() {
  const [squares, setSquares] = useState(boxes);
  const [showBtn, setShowBtn] = useState(false);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) =>
        square.id === id ? { ...square, on: !square.on } : square
      );
    });
  }

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} toggle={() => toggle(square.id)} />
  ));

  return (
    <div className="box-container">
      <LearningBtn handleClick={() => setShowBtn(!showBtn)} />
      {showBtn && <Learnings learnData={flipBoxLearning} />}
      <div className="flip-box-title">Flip Me!</div>
      <div className="boxes">{squareElements}</div>
    </div>
  );
}

export default FlipBox;
