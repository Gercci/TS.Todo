import { TodoList } from "./TodoList";
import React, { useReducer } from "react";
import { addTodo, initialState, removeTodo, todoReducer } from "./TodoList/reducer";
import { TodoWrapper } from './TodoList/elements'
import { AddForm } from "./AddForm";

export type AddTodoFn = (text: string) => void
export type RemoveTodoFn = (id: number) => void

export const Todo: React.FC = () => {
    const [state, dispatch] = useReducer<TodoReducer>(todoReducer, initialState)

    const onAddTodo = (text: string) => dispatch(addTodo(text))
    const onRemoveTodo = (id: number) => dispatch(removeTodo(id))

    return (
        <div className="App">
            <TodoWrapper>
                <AddForm onAdd={onAddTodo} />s
                <TodoList todos={state} removeTodo={onRemoveTodo}/>
            </TodoWrapper>
        </div>
    )
}
