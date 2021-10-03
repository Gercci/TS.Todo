import React, {useCallback, useContext} from "react";
import {RemoveTodoFn, Todo } from "../todo.types";
import {TodoContext} from "../Model/TodoContext";

export const TodoList: React.FC = () => {
    const { removeTodo, state: todos } = useContext(TodoContext)
    const onRemove = useCallback<RemoveTodoFn>((id) => removeTodo && removeTodo(id), [])
    return (
        <>
            {todos?.map(({text, completed, id}: Todo) => (
                <>
                    <h1 key={id}>{text} - {id}</h1>
                    <button onClick={() => onRemove(id)}>Удалить</button>
                </>
            ))}
        </>
    )
}