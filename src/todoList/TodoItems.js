import React from "react";
import tick from "../assests/cryptoplace_assets/assets/assets/tick.png";

import deletes from "../assests/cryptoplace_assets/assets/assets/delete.png";

const TodoItems = ({ item, handleDelete }) => {
  if (item === null) {
    return null;
  }

  return (
    <div>
      <div className="todo" key={item.id}>
        <div className="todo-list">
          <img src={tick} alt="tick" className="image" />
          <p>{item.data}</p>
        </div>

        <img
          src={deletes}
          onClick={() => handleDelete(item.id)}
          alt="delete"
          className="image"
        />
      </div>
    </div>
  );
};

export default TodoItems;
