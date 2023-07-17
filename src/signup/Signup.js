import React, { useState } from "react";
import "./signup.css";
import LearningBtn from "../components/LearningBtn";
import Learnings from "../components/Learnings";
import signupLearning from "./signupLearning";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevdata) => ({
      ...prevdata,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password === formData.passwordConfirm) {
      setIsSubmitted(true);
    }
  }

  return (
    <div className="form-container">
      <LearningBtn handleClick={() => setShowBtn(!showBtn)} />
      {showBtn && <Learnings learnData={signupLearning} />}
      {isSubmitted ? (
        <div className="submit-text">
          Thanks for signing up for our newsletter!
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className="form--input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="form--input"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="form--input"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange}
            required
          />
          <div className="form--marketing">
            <input
              id="okayToEmail"
              type="checkbox"
              name="joinedNewsletter"
              checked={formData.joinedNewletter}
              onChange={handleChange}
              required
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
          </div>
          <button className="form--submit">Sign up</button>
        </form>
      )}
    </div>
  );
}

export default Signup;
