import React, { useState } from "react";
import "./countEmo.css";

function CountEmoji() {
  const [count, setCount] = useState(0);
  const [tray, setTray] = useState([]);

  const emojiArr = [
    "🍓",
    "🍔",
    "🥛",
    "🍣",
    "🧈",
    "🥣",
    "👋",
    "🎉",
    "🥳",
    "😍",
    "🥂",
    "💪",
    "💻",
    "🍲",
  ];
  const addEmoji = () => {
    setCount((prev) => prev + 1);
    const randomNum = Math.floor(Math.random() * emojiArr.length);
    const newElement = emojiArr[randomNum];
    const newTray = [...tray, newElement];
    setTray(newTray);
  };

  const subtractEmoji = () => {
    if (count === 0) return;
    setCount((prev) => prev - 1);
    const newTray = [...tray];
    newTray.pop();
    setTray(newTray);
  };
  const reset = () => {
    setTray("");
    setCount(0);
  };
  return (
    <div className="emoji-container">
      <div className="btn-container">
        <button onClick={subtractEmoji}>-</button>
        <div className="count-title">{count}</div>
        <button onClick={addEmoji}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="emoji-tray">{tray}</div>
    </div>
  );
}

export default CountEmoji;
