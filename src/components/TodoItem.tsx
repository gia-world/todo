import {
  useCompleteTodo,
  useEditTodo,
  useRemoveTodo,
} from "@/context/TodoContext";
import { Todo } from "@/model/todo";
import { useState } from "react";

type Props = {
  todo: Todo;
};

export default function TodoItem({ todo }: Props) {
  const removeTodo = useRemoveTodo();
  const completeTodo = useCompleteTodo();
  const editTodo = useEditTodo();

  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(todo.text);

  const toggleEdit = (id: number) => {
    if (isEdit) {
      editTodo(id, text);
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };

  return (
    <li className="flex gap-3" key={`todo-${todo.id}`}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => completeTodo(todo.id)}
      />
      <div className="flex-1">
        {isEdit ? (
          <input
            className="flex-1 rounded border border-gray-300 px-2 py-1"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <p className={todo.isDone ? "line-through" : ""}>{todo.text}</p>
        )}
      </div>

      <button
        onClick={() => toggleEdit(todo.id)}
        className="rounded bg-sky-500 px-3 py-0.5 text-white"
      >
        {isEdit ? "수정완료" : "수정"}
      </button>
      <button
        onClick={() => removeTodo(todo.id)}
        className="rounded bg-red-500 px-3 py-0.5 text-white"
      >
        삭제
      </button>
    </li>
  );
}
