export const initialState: Todos = [
    {
        id: 0,
        text: 'Initial todo',
        completed: true
    },
]

const getNextAvailableId = (todos: Todos): number => todos[todos.length - 1].id + 1

export const todoReducer: TodoReducer = (state, action) => {
        switch (action.type) {
            case 'addTodo':
                return [...state, {
                    text: action.payload,
                    completed: false,
                    id: getNextAvailableId(state)
                }]
            case 'removeTodo':
                return state.filter((todo: Todo) => todo.id !== action.payload)
            default:
                return state
        }
    }

const todoActions = {
    addTodo: (payload: AddTodoPayload): AddTodo => ({ type: 'addTodo', payload }),
    removeTodo: (payload: number): RemoveTodo => ({ type: 'removeTodo', payload })
}

export const { addTodo, removeTodo } = todoActions
