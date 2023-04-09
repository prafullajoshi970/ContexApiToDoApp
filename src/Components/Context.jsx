import { createContext, useState } from "react";
import React from "react";
import { v4 } from "uuid";

const MyContext = createContext();
const Context = ({ children }) => {
  const [Todo, setTodo] = useState([]);

  const AddItem = (t) => {
    setTodo([
      ...Todo,
      {
        id: v4(),
        task: t,
        complete: false,
      },
    ]);
  };
  const isChecked = (id, status) => {
    setTodo(Todo.map((t) => (t.id === id ? { ...t, complete: status } : t)));
  };

  
  const updateTodo = (id, data) => {
    setTodo(Todo.map((t) => (t.id === id ? { ...t, task: data } : t)));
  };

  const deleteTodo = (id) => {
    setTodo(Todo.filter((ts) => ts.id !== id));
  };

  // }

  return (
    <MyContext.Provider
      value={{ Todo, setTodo, AddItem, isChecked, deleteTodo,updateTodo }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { Context, MyContext };
