import React, { useState } from "react";
import "./pswdG.css";

function PswdGen() {
  const [password, setPassword] = useState("");

  const generatePass = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    setPassword(password);
  };

  return (
    <div className="pswd-parent">
      <div className="pass-container">
        <div className="pass-title">Password Generator</div>
        <button onClick={generatePass}>Generate Password</button>
        <div className="pass-answer">{password}</div>
      </div>
    </div>
  );
}

export default PswdGen;
