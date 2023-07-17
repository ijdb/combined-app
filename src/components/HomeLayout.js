import React from "react";
import { Link, Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className="parent-container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pomodoro">Pomodoro</Link>
        <Link to="/flipbox">Flipbox</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/memeGenerator">Meme Generator</Link>
        <Link to="/tenzies">Tenzies</Link>
        <Link to="/windowtracker">Window Tracker</Link>
        <Link to="/todoList">To do List</Link>
        <Link to="/pswdgen">Password Gen</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/userform">Userform</Link>
        <Link to="/countemoji">Count Emoji</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default HomeLayout;
