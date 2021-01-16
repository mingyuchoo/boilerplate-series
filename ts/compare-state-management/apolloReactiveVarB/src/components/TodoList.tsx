import React from "react";
import { useReactiveVar } from "@apollo/client";
import { todosVar, toggleTodos, removeTodos, Item } from "../states/TodosState";

const TodoList = () => {
  const todos = useReactiveVar(todosVar);

  return (
    <>
      <div className="row">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Completed?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.items.map((item: Item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.completed ? "✅" : ""}</td>
                <td>
                  <button className="btn btn-sm btn-info" onClick={(_) => toggleTodos(item.id!)}>
                    Toggle
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={(_) => removeTodos(item.id!)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TodoList;
