import { AddForm as AddFormArea } from "./elements";
import React, {FormEvent, useContext, useState} from "react";
import {TodoContext} from "../Model/TodoContext";

export const AddForm: React.FC = () => {
    const { addTodo } = useContext(TodoContext)
    const initialValue = ''
    const [ areaValue, setAreaValue ] = useState(initialValue)
    const onChangeArea = (e: FormEvent<HTMLTextAreaElement>) => {
        setAreaValue(e.currentTarget.value)
    }
    const onClick: () => void = () => {
        if (addTodo) addTodo(areaValue)
        setAreaValue(initialValue)
    }
    return (
        <>
            <AddFormArea value={areaValue} onChange={onChangeArea} />
            <button onClick={onClick}>Добавить</button>
        </>
    )
}