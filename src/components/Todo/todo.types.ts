export type AddTodoFn = (text: string) => void
export type RemoveTodoFn = (id: number) => void

export interface Todo {
    id: number,
    text: string,
    completed: boolean
}

export type AddTodoPayload = string

export type Todos = Todo[]

export interface AddTodo {
    type: 'addTodo',
    payload: AddTodoPayload
}

export interface RemoveTodo {
    type: 'removeTodo',
    payload: number
}

export type TodoActions = AddTodo | RemoveTodo

export type TodoReducer = (state: Todos, action: TodoActions) => Todos