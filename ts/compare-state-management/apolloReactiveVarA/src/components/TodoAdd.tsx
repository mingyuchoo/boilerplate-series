import React, { useState } from "react";
import { useTodos, addTodos } from "../states/TodosState";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const { data } = useTodos();
  const todos = data.todos;

  return (
    <div>
      <div className="alert alert-primary">
        <div className="d-inline col-4">
          Total items: &nbsp;
          <span className="badge badge-info">{todos.info.total}</span>
        </div>
        <div className="d-inline col-4">
          Finished items: &nbsp;
          <span className="badge badge-info">{todos.info.completed}</span>
        </div>
        <div className="d-inline col-4">
          Unfinished items: &nbsp;
          <span className="badge badge-info">{todos.info.notCompleted}</span>
        </div>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          value={title}
          placeholder="Todo title..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button
          className="btn btn-primary"
          onClick={(_) => {
            addTodos({
              title: title,
              completed: false,
            });
            setTitle("");
          }}>
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
