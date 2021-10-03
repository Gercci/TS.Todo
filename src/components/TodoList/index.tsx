import React, { useCallback } from "react";
import { TodoWrapper } from './elements'
import {AddForm} from "../AddForm";

interface TodoListProps {
    todos: Todos,
    addTodo: AddTodo,
    removeTodo: RemoveTodo
}

export type AddTodo = (text: string) => void
export type RemoveTodo = (id: number) => void

export const TodoList: React.FC<TodoListProps> = ({ todos, addTodo, removeTodo }) => {
    const onAdd = useCallback<AddTodo>(() => addTodo, [])
    const onRemove = useCallback<RemoveTodo>(() => removeTodo, [])
    return (
        <TodoWrapper>
            <AddForm onAdd={onAdd} />
            {todos.map(({text, completed, id}: Todo) => (
                <>
                    <h1 key={id}>{text} - {id}</h1>
                    <button onClick={() => onRemove(id)}>Удалить</button>
                </>
            ))}
        </TodoWrapper>
    )
}