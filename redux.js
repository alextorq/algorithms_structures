function createStore(reducer, initialState) {
    let state = initialState
    return {
        dispatch: action => { state = reducer(state, action) },
        getState: () => state,
    }
}


// Инициализация хранилища
function todosReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    default:
      return state
  }
}

const initialTodos = []

const store = createStore(todosReducer, initialTodos)

// Использование
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Понять насколько redux прост'
})

store.getState() 
// [{ id: 1, text: 'Понять насколько redux прост', completed: false }]

store.dispatch({
  type: 'TOGGLE_TODO',
  id: 1
})

console.log(store.getState() )
