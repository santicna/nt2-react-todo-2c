import React, { Component } from "react";
import Tareas from "./Tareas";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      filteredTareas: [],
      filtered: false,
    };
  }

  addTodo() {
    const input = prompt("Tarea a realizar");
    if (input === null || input == "") {
      return;
    }
    let tarea = {
      key: Math.random(),
      titulo: input,
      checked: false,
      setChecked: this.handleCheckBox.bind(this),
    };
    const newArray = Array.from(this.state.tareas);
    newArray.push(tarea);
    document.getElementById(123).value = "";
    this.setState({ tareas: newArray, filteredTareas: [], filtered: false });
  }

  deleteAllChecked() {
    const allTareas = Array.from(this.state.tareas);
    const newArray = allTareas.filter((tarea) => !tarea.checked);
    this.setState({ tareas: newArray });
  }
  handleCheckBox(key) {
    const newArray = Array.from(this.state.tareas);
    let tarea = newArray.find((tarea) => tarea.key === key);
    tarea.checked = !tarea.checked;
    this.setState({ tareas: newArray });
  }
  deleteTarea(key) {
    const newArray = Array.from(this.state.tareas);
    this.setState({ tareas: newArray.filter((tarea) => tarea.key != key) });
  }
  handleFilter() {
    const texto = document.getElementById(123).value;
    if (texto === "") {
      this.setState({ filteredTareas: [], filtered: false });
    } else {
      const newArray = this.state.tareas.filter((tarea) =>
        tarea.titulo.includes(texto)
      );
      this.setState({ filteredTareas: newArray, filtered: true });
    }
  }

  render() {
    return (
      <div>
        <h1 className="center title">TODO App</h1>
        <div className="flow-right controls">
          <span>
            Item count: <span id="item-count">{this.state.tareas.length}</span>
          </span>
          <span>
            Unchecked count:
            <span id="unchecked-count">
              {
                this.state.tareas.filter((tarea) => tarea.checked == false)
                  .length
              }
            </span>
          </span>
        </div>
        <div className="buttons">
          <button className="button1" onClick={this.addTodo.bind(this)}>
            Agregar Tarea
          </button>
          <button
            className="button1"
            onClick={this.deleteAllChecked.bind(this)}
          >
            Eliminar terminadas
          </button>
        </div>
        <div className="filter">
          <span>Filtro</span>
          <input
            className="filterText"
            id="123"
            type="text"
            label="filtro"
            onKeyUp={this.handleFilter.bind(this)}
          ></input>
        </div>
        <div className="todoList">
          <Tareas
            className="todo list"
            tareas={
              this.state.filtered
                ? this.state.filteredTareas
                : this.state.tareas
            }
            deleteTarea={this.deleteTarea.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
