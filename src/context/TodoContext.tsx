import { Todo } from "@/model/todo";
import { createContext, useContext } from "react";

export const TodoContext = createContext<Todo[] | undefined>(undefined);

export const useTodos = () => useContext(TodoContext);
