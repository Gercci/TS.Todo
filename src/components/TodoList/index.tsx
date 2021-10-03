import React, { useCallback } from "react";
import { TodoWrapper } from './elements'
import {AddForm} from "../AddForm";

interface TodoListProps {
    todos: Todos,
    onAddTodo: OnAddTodo,
    onRemoveTodo: OnRemoveTodo
}

export type OnAddTodo = (text: string) => void
export type OnRemoveTodo = (id: number) => void

export const TodoList: React.FC<TodoListProps> = ({ todos, onAddTodo, onRemoveTodo }) => {
    const onAdd = useCallback<OnAddTodo>(() => onAddTodo, [])
    const onRemove = useCallback<OnRemoveTodo>(() => onRemoveTodo, [])
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