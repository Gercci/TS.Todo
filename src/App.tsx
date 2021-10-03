import React, {useReducer} from 'react';
import { TodoList } from "./components";
import './general.styles.css'
import {addTodo, initialState, removeTodo, todoReducer} from "./components/TodoList/reducer";

export const App = () => {
    const [state, dispatch] = useReducer<TodoReducer>(todoReducer, initialState)
    const onAddTodo = (text: string) => {
        dispatch(addTodo(text))
    }
    const onRemoveTodo = (id: number) => {
        dispatch(removeTodo(id))
    }
    return (
        <div className="App">
            <TodoList todos={state} onAddTodo={onAddTodo} onRemoveTodo={onRemoveTodo} />
        </div>
    )
};
