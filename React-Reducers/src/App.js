import React, { useState, useReducer } from "react";
import "./styles.css";
import ToDoReducer from "./Reducer";
import { TODO_ACTIONS } from "./ACTIONS";

export default function App() {
  const [state, setState] = useState("");
  const [todos, dispatchTodo] = useReducer(ToDoReducer, []);
  function setToDo(e) {
    e.preventDefault();
    console.log(e.target.value);
    setState(e.target.value);
  }

  console.log(todos);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
    console.log(todos);
    dispatchTodo({
      type: TODO_ACTIONS.ADD_TODO,
      payload: {
        name: state
      }
    });
    setState("");
  }

  function toggle(e, id) {
    e.preventDefault();
    dispatchTodo({
      type: TODO_ACTIONS.TOGGLE_TODO,
      payload: { id: id }
    });
  }

  function deleteToDo(e, id) {
    e.preventDefault();
    dispatchTodo({
      type: TODO_ACTIONS.DELETE_TODO,
      payload: { id: id }
    });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={state} onChange={setToDo} />
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li onClick={(e) => toggle(e, todo.id)}>
              {todo.name} - {todo.id} - {todo.completed.toString()}
              <button onClick={(e) => deleteToDo(e, todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
