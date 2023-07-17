import React, { useRef, useState } from "react";
import "./userform.css";

function Userform() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [userData, setUserData] = useState([]);
  const inputRef = useRef(null);

  function clickHandler() {
    if (username && age > 0) {
      setUserData([...userData, { username, age }]);
      setUsername("");
      setAge("");
    }
    inputRef.current.focus();
  }

  return (
    <div className="user-container">
      <div className="user-form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          ref={inputRef}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={clickHandler}>Add User</button>

        {userData.length > 0 ? (
          <ul>
            {userData.map((user, index) => (
              <li key={index} className="user-list-item">
                {`${user.username} (${user.age} year${
                  user.age > 1 ? "s" : ""
                } old)`}
              </li>
            ))}
          </ul>
        ) : (
          <p className="user-list">No user data yet</p>
        )}
      </div>
    </div>
  );
}

export default Userform;
