import React, { useContext } from "react";
import TodoStore from "../stores/TodoStore";
import { observer } from "mobx-react-lite";

const TodoList = () => {
  const todoStore = useContext(TodoStore);
  const { todos, toggle, remove } = todoStore;

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
            {todos.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.completed ? "✅" : ""}</td>
                <td>
                  <button className="btn btn-sm btn-info" onClick={(_) => toggle(item.id!)}>
                    Toggle
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={(_) => remove(item.id!)}>
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

export default observer(TodoList);
