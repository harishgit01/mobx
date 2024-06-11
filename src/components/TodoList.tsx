import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import todoStore, { Todo } from "@/stores/Todo";

const TodoList: React.FC = observer(() => {
  const [initialRender, setInitialRender] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (initialRender) {
      setTodos(todoStore.todos);
      setInitialRender(false);
    }
  }, [initialRender]);

  const handleToggle = (id: number) => {
    todoStore.toggleTodo(id);
  };

  const handleDelete = (id: number) => {
    todoStore.removeTodo(id);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Todo List</h2>
      <div>
        {todos.map((todo: Todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between py-2 border-b"
          >
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
                className="mr-2"
              />
              <span
                className={
                  todo.completed
                    ? "line-through text-green-500"
                    : "text-white"
                }
              >
                {todo.text}
              </span>
            </label>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TodoList;
