import React, { useState } from "react";

function TodoItem(props) {
  const [isDone, setisDone] = useState(false);

  function handleClick() {
    setisDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}
export default TodoItem;
