import { useAddTodo } from "@/context/TodoContext";
import { FormEvent, useState } from "react";

export default function TodoForm() {
  const addTodo = useAddTodo();
  const [text, setText] = useState("");
  const noText = text.length === 0;
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full justify-between gap-4">
      <input
        type="text"
        className="flex-1 rounded border border-gray-300 px-2 py-1"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        disabled={noText}
        className="rounded bg-sky-500 px-4 font-bold text-white"
      >
        작성
      </button>
    </form>
  );
}
