

const initialState = {
    todos: [
        {
        id: 1,
        title: 'do hw'
    },
        {
        id: 2,
        title: 'do hw again'
    }
]
}


export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD': {
            return {
                ...state,
                todos: [...state.todos, {title: action.title,
                    id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1,
                }],
            }
        }
        case 'DELETE' : {
            return{
                todos: [...state.todos.filter(todos => todos.id !== action.payload)
            ]}
        }
        case 'COMPLETE': {
            const {id} = action.id
            return {
                ...state,
                todos: [...state.todos, {text: action.text,
                    id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1
                }],
            }
        }
      
        default: return state
    }
    
}




export const addTodo = (title) => {
    return(dispatch) => {
        return dispatch({type: 'ADD', title: title})
    }
}
export const removeTodo = (id) => {
    return {
        type: 'DELETE',
        payload:id
    }
}

export const completeTodo = (todo) => {
    return {
        type: 'COMPLETE',
        todo: todo.id
    }
}



      