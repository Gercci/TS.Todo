interface Todo {
    id: number,
    text: string,
    completed: boolean
}

type AddTodoPayload = string

type Todos = Todo[]

interface AddTodo {
    type: 'addTodo',
    payload: AddTodoPayload
}

interface RemoveTodo {
    type: 'removeTodo',
    payload: number
}

type TodoActions = AddTodo | RemoveTodo

type TodoReducer = (state: Todos, action: TodoActions) => Todos
