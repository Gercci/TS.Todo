import {createContext} from "react";
import {AddTodoFn, RemoveTodoFn, Todos} from "../todo.types";

export interface TodoContextValue {
    state: Todos,
    addTodo: AddTodoFn,
    removeTodo: RemoveTodoFn
}

export const TodoContext = createContext<Partial<TodoContextValue>>({})