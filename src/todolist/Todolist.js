import React, { useEffect, useRef, useState } from "react";
import "./todo.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const doneTasks = todos.filter((item) => item.completed === true).length;
  const totalTasks = todos.length;

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
    inputRef.current.focus();
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };
  const handleDeleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
    inputRef.current.focus();
  };
  const handleToggle = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-parent">
      <div className="todo-container">
        <div className="todo-info">
          {doneTasks}/{totalTasks}
        </div>
        <div className="todo-title">Todo List</div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          ref={inputRef}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleAddTodo}>Add</button>
        <div className="todo-list">
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="todo-item">
                <div onClick={() => handleToggle(index)} className="todo-tick">
                  <TiTick />
                </div>
                <div className={todo.completed ? "line" : "" + "todo-text"}>
                  {todo.text}
                </div>
                <div
                  className="todo-del"
                  onClick={() => handleDeleteTodo(index)}
                >
                  <RiDeleteBin6Line />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
