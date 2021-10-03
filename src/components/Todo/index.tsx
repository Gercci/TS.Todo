import { TodoList } from "./TodoList";
import React from "react";
import { TodoWrapper } from './TodoList/elements'
import { AddForm } from "./AddForm";
import {TodoProvider} from "./Model/TodoProvider";

export const Todo: React.FC = () => {
    return (
        <div className="App">
            <TodoWrapper>
                <TodoProvider>
                    <AddForm />
                    <div />
                    <TodoList />
                </TodoProvider>
            </TodoWrapper>
        </div>
    )
}
