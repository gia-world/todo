import { FormEvent, useState } from "react";

type Props = {
  onChange: (text: string) => void;
};

export default function TodoForm({ onChange }: Props) {
  const [text, setText] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onChange(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" disabled={text.length === 0}>
        작성
      </button>
    </form>
  );
}
