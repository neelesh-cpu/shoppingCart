import React, { useState } from "react";
import todolistimg from "../assests/cryptoplace_assets/assets/assets/todo_icon.png";

import TodoItems from "./TodoItems";

const TodoList = () => {
  const [data, setData] = useState("");
  const [item, setItem] = useState([]);

  function handleDelete(id) {
    console.log(item);
    setItem(item.filter((items) => items.id !== id));

    console.log("clicked");
  }

  function handleAddItems(item) {
    setItem((items) => [...items, item]);
    console.log(item);
  }
  function handleInput(e) {
    setData(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    const inputdata = {
      id: Date.now(),
      data,
    };
    handleAddItems(inputdata);
    setData("");
  }

  return (
    <div className="app">
      <div className="hero">
        {/* -------Title-----------*/}
        <div className="todolist-header">
          <img className="todolistimg" src={todolistimg} alt="todolist icon" />
          <h1>To-Do List</h1>
        </div>
        {/*****---Input text----------- */}
        <div className="inputbox">
          <input
            type="text"
            placeholder="Add Your Task"
            className="input"
            value={data}
            onChange={handleInput}
          />
          <button className="btn" onClick={handleClick}>
            ADD +
          </button>
        </div>
        {/*****---TODOlIST ITEM----------- */}
        <div>
          {item.map((item, index) => (
            <TodoItems item={item} handleDelete={handleDelete} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
