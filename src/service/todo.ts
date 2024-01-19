import { Todo } from "@/model/todo";

export const addTodo = (todos: Todo[], text: string) => {
  const existingIds = todos.map((todo) => todo.id);
  const newId = todos.length === 0 ? 1 : Math.max(...existingIds) + 1;

  const newTodo = {
    id: newId,
    text: text,
    isDone: false,
  };

  return [...todos, newTodo];
};

export const completeTodo = (todos: Todo[], id: number) => {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
  );
};

export const removeTodo = (todos: Todo[], id: number) => {
  return todos.filter((todo) => todo.id !== id);
};

export const editTodo = (todos: Todo[], id: number, text: string) => {
  return todos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo));
};
