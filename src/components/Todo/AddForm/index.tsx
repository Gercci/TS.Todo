import { AddForm as AddFormArea } from "./elements";
import React, {FormEvent, useState} from "react";
import {AddTodoFn} from "../index";

export const AddForm: React.FC<{ onAdd: AddTodoFn }> = ({ onAdd }) => {
    const initialValue = ''
    const [ areaValue, setAreaValue ] = useState(initialValue)
    const onChangeArea = (e: FormEvent<HTMLTextAreaElement>) => {
        setAreaValue(e.currentTarget.value)
    }
    const onClick: () => void = () => {
        onAdd(areaValue)
        setAreaValue(initialValue)
    }
    return (
        <>
            <AddFormArea value={areaValue} onChange={onChangeArea} />
            <button onClick={onClick}>Добавить</button>
        </>
    )
}