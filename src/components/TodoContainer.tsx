"use client";

import TodoForm from "@/components/TodoForm";
import { Todo } from "@/model/todo";
import { useState } from "react";

export default function TodoContainer() {
  const [todos, setTodos] = useState<Todo[]>();

  const addTodo = (text: string) => {
    if (!todos) {
      setTodos([{ id: 1, text: text, isDone: false }]);
    } else {
      const existingIds: number[] = todos.map((todo) => todo.id);
      const maxId = Math.max(...existingIds);
      const newId = maxId + 1;

      const NewTodo = {
        id: newId,
        text: text,
        isDone: false,
      };
      setTodos([...todos, NewTodo]);
    }
  };

  const removeTodo = (id: number) => {
    if (!todos) return;
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleIsDone = (id: number) => {
    if (!todos) return;

    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <main className="max-w-md">
      <h1>To Do List</h1>
      {/* <TodoContext.Provider value={todos}> */}
      <TodoForm onChange={addTodo} />
      <section>
        <h2>To do</h2>
        <ul>
          {todos?.map((todo) => (
            <li className="flex gap-3" key={`todo-${todo.id}`}>
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => handleIsDone(todo.id)}
              />
              <p>{todo.text}</p>
              <button>수정</button>
              <button onClick={() => removeTodo(todo.id)}>삭제</button>
            </li>
          ))}
        </ul>
      </section>
      {/* </TodoContext.Provider> */}
    </main>
  );
}
