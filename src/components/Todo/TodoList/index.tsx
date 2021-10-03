import React, { useCallback } from "react";
import {RemoveTodoFn} from "../index";

interface TodoListProps {
    todos: Todos,
    removeTodo: RemoveTodoFn
}

export const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
    const onRemove = useCallback<RemoveTodoFn>((id) => removeTodo(id), [])
    return (
        <>
            {todos.map(({text, completed, id}: Todo) => (
                <>
                    <h1 key={id}>{text} - {id}</h1>
                    <button onClick={() => onRemove(id)}>Удалить</button>
                </>
            ))}
        </>
    )
}