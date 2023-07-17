import React, { useState } from "react";
import "./memeGen.css";
import HeaderMG from "./HeaderMG";
import Meme from "./Meme";
import LearningBtn from "../components/LearningBtn";
import Learnings from "../components/Learnings";
import memeGLearning from "./memeGLearning";

function MemeGenerator() {
  const [showBtn, setShowBtn] = useState(false);
  return (
    <div className="meme-container">
      <LearningBtn handleClick={() => setShowBtn(!showBtn)} />
      {showBtn && <Learnings learnData={memeGLearning} />}
      <HeaderMG />
      <Meme />
    </div>
  );
}

export default MemeGenerator;
