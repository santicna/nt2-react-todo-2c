import React from "react";

export default function Tarea(props) {
  function check() {
    props.tarea.setChecked(props.tarea.key);
  }
  function handleDelete() {
    props.deleteTarea(props.tarea.key);
  }
  return (
    <li className="todoItem">
      <p className="todo-text">
        {props.tarea.titulo}
        <input type="checkbox" className="todo-check" onChange={check}></input>
        <button className="todo-delete" onClick={handleDelete}>
          ✖
        </button>
      </p>
    </li>
  );
}
