import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pomodoro from "./pomodoro/Pomodoro";
import FlipBox from "./flipTheBox/FlipBox";
import Signup from "./signup/Signup";
import MemeGenerator from "./meme-generator/MemeGenerator";
import Tenzies from "./tenzies/Tenzies";
import WindowTracker from "./windowTracker/WindowTracker";
import Todolist from "./todolist/Todolist";
import PswdGen from "./pswdGen/PswdGen";
import Feedback from "./feedback/Feedback";
import Userform from "./userform/Userform";
import CountEmoji from "./countEmoji/CountEmoji";
import HomeLayout from "./components/HomeLayout";
import Confetti from "react-confetti";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/flipBox" element={<FlipBox />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/memeGenerator" element={<MemeGenerator />} />
          <Route path="/tenzies" element={<Tenzies />} />
          <Route path="/windowtracker" element={<WindowTracker />} />
          <Route path="/todoList" element={<Todolist />} />
          <Route path="/pswdgen" element={<PswdGen />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/userform" element={<Userform />} />
          <Route path="/countemoji" element={<CountEmoji />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
function Home() {
  return (
    <div className="app-title">
      Welcome to my website
      <Confetti />
    </div>
  );
}
export default App;
