import { Todo } from "@/model/todo";
import { addTodo, completeTodo, editTodo, removeTodo } from "@/service/todo";
import { createContext, useContext, useState } from "react";

type TodoContextProps = {
  todos: Todo[];
  handleAddTodo: (text: string) => void;
  handleCompleteTodo: (id: number) => void;
  handleRemoveTodo: (id: number) => void;
  handleEditTodo: (id: number, text: string) => void;
};

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const TodoProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos((prevTodos) => addTodo(prevTodos, text));
  };

  const handleCompleteTodo = (id: number) => {
    setTodos((prevTodos) => completeTodo(prevTodos, id));
  };

  const handleRemoveTodo = (id: number) => {
    if (window.confirm("항목을 삭제하시겠습니까?")) {
      setTodos((prevTodos) => removeTodo(prevTodos, id));
    }
  };

  const handleEditTodo = (id: number, text: string) => {
    setTodos((prevTodos) => editTodo(prevTodos, id, text));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        handleAddTodo,
        handleCompleteTodo,
        handleRemoveTodo,
        handleEditTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const errMsg = "context should be within a proper provider";

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error(errMsg);
  }
  return context.todos;
};

export const useAddTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error(errMsg);
  }
  return context.handleAddTodo;
};

export const useCompleteTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error(errMsg);
  }
  return context.handleCompleteTodo;
};

export const useRemoveTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error(errMsg);
  }
  return context.handleRemoveTodo;
};

export const useEditTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error(errMsg);
  }
  return context.handleEditTodo;
};
