import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export interface Item {
  id?: string;
  title: string;
  completed: boolean;
}

class TodoStore {
  todos: Item[] = [
    { id: uuidv4(), title: "Item #1", completed: false },
    { id: uuidv4(), title: "Item #2", completed: false },
    { id: uuidv4(), title: "Item #3", completed: false },
    { id: uuidv4(), title: "Item #4", completed: false },
    { id: uuidv4(), title: "Item #5", completed: true },
    { id: uuidv4(), title: "Item #6", completed: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  get info() {
    return {
      total: this.todos.length,
      completed: this.todos.filter((item) => item.completed).length,
      notCompleted: this.todos.filter((item) => !item.completed).length,
    };
  }

  add = (item: Item) => {
    this.todos.push({ ...item, id: uuidv4() });
  };

  toggle = (id: string) => {
    this.todos = this.todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
  };

  remove = (id: string) => {
    this.todos = this.todos.filter((item) => item.id !== id);
  };
}

export default createContext(new TodoStore());
