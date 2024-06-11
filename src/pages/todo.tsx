import TodoList from "@/components/TodoList";
import AddTodo from "@/components/addTodo";
import React from "react";

const ToDo = () => {
  return (
    <div className="px-10">
      <h1 className="text-center my-4 font-bold text-2xl">Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default ToDo;
