import React, { Component } from "react";

export default function Tarea(props) {
  function check() {
    props.tarea.setChecked(props.tarea.key);
  }
  function handleDelete() {
    props.deleteTarea(props.tarea.key);
  }
  return (
    <li>
      <p style={{ textDecoration: "" /*"line-through"*/ }}>
        {props.tarea.titulo}
        <input type="checkbox" onChange={check}></input>
        <button type="todo-delete" onClick={handleDelete}>
          ❌
        </button>
      </p>
    </li>
  );
}
