import { makeVar } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";

export interface Item {
  id?: string;
  title: string;
  completed: boolean;
}
export interface Info {
  total: number;
  completed: number;
  notCompleted: number;
}
export interface Todos {
  items: Item[];
  info: Info;
}
const todosInitialValue: Todos = {
  items: [
    { id: uuidv4(), title: "Item #1", completed: false },
    { id: uuidv4(), title: "Item #2", completed: false },
    { id: uuidv4(), title: "Item #3", completed: false },
    { id: uuidv4(), title: "Item #4", completed: false },
    { id: uuidv4(), title: "Item #5", completed: true },
    { id: uuidv4(), title: "Item #6", completed: false },
  ],
  info: { total: 6, completed: 1, notCompleted: 5 },
};

// MAKE ReactiveVar
export const todosVar = makeVar(todosInitialValue);

// CACHE
export const TodosState = {
  todos: {
    read() {
      return todosVar();
    },
  },
};

function _makeInfo(items: Item[]) {
  return {
    total: items.length,
    completed: items.filter((item) => item.completed).length,
    notCompleted: items.filter((item) => !item.completed).length,
  };
}

// ADD
export const addTodos = (function (todosVar) {
  return (item: Item) => {
    const todos = todosVar();
    const items = todos.items.concat({ ...item, id: uuidv4() });
    const info = _makeInfo(items);
    todosVar({ items, info });
  };
})(todosVar);

// TOGGLE
export const toggleTodos = (function (todosVar) {
  return (id: string) => {
    const todos = todosVar();
    const items = todos.items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    const info = _makeInfo(items);
    todosVar({ items, info });
  };
})(todosVar);

// REMOVE
export const removeTodos = (function (todosVar) {
  return (id: string) => {
    const todos = todosVar();
    const items = todos.items.filter((item) => item.id !== id);
    const info = _makeInfo(items);
    todosVar({ items, info });
  };
})(todosVar);
