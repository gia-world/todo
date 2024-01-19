"use client";

import TodoForm from "@/components/TodoForm";
import { TodoProvider } from "@/context/TodoContext";
import TodoList from "./TodoList";

export default function TodoContainer() {
  return (
    <main className="mx-4 mt-2 max-w-md">
      <h1 className="px-2 py-4 text-center text-2xl font-bold">To Do List</h1>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </main>
  );
}
