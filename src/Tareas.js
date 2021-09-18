import React, { Component } from "react";
import Tarea from "./Tarea";

export default function Tareas(props) {
  return (
    <ul id="todo-list" className="todo-list">
      {props.tareas.map((tarea) => {
        return (
          <Tarea
            key={tarea.key}
            tarea={tarea}
            deleteTarea={props.deleteTarea}
          />
        );
      })}
    </ul>
  );
}
