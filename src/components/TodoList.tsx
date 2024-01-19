"use client";

import { Todo } from "@/model/todo";

type Props = {
  todos?: Todo[];
};
export default function TodoList({ todos }: Props) {
  return (
    <ul>
      {todos?.map((todo) => (
        <li className="flex gap-3" key={`todo-${todo.id}`}>
          <input type="checkbox" checked={todo.isDone} />
          <p>{todo.text}</p>
          <button>수정</button>
          <button>삭제</button>
        </li>
      ))}
    </ul>
  );
}
