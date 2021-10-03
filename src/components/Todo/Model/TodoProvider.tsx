import React, {useReducer} from "react";
import {addTodo, initialState, removeTodo, todoReducer} from "./reducer";
import {TodoContext, TodoContextValue} from "./TodoContext";
import {TodoReducer} from "../todo.types";

export const TodoProvider: React.FC<{ children: JSX.Element[] }> = ({ children }) => {
    const [state, dispatch] = useReducer<TodoReducer>(todoReducer, initialState)

    const onAddTodo = (text: string) => dispatch(addTodo(text))
    const onRemoveTodo = (id: number) => dispatch(removeTodo(id))
    const providerValue: TodoContextValue = {
        state,
        removeTodo: onRemoveTodo,
        addTodo: onAddTodo
    }

    return (
        <TodoContext.Provider value={providerValue}>
            {children}
        </TodoContext.Provider>
    )
}