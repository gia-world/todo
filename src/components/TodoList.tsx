import { useTodos } from "@/context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodos();
  return (
    <ul className="mt-6 flex flex-col gap-2">
      {todos?.map((todo) => (
        <TodoItem key={`todo-${todo.id}`} todo={todo} />
      ))}
    </ul>
  );
}
