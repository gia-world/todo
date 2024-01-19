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
    <form onSubmit={handleSubmit} className="w-full flex justify-between gap-4">
      <input
        type="text"
        className="border flex-1 border-gray-300 py-1 px-2 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        disabled={noText}
        className="bg-sky-500 rounded text-white px-4"
      >
        작성
      </button>
    </form>
  );
}
