"use client";

import TodoForm from "@/components/TodoForm";
import { TodoProvider } from "@/context/TodoContext";
import TodoList from "./TodoList";

export default function TodoContainer() {
  return (
    <main className="max-w-md mt-2 mx-4">
      <h1 className="py-4 px-2 text-center font-bold text-2xl">To Do List</h1>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </main>
  );
}
