import * as types from '../actionTypes';

const initialState = {
  example: ['hello world']
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    // Add Todo
    // case types.ADD_TODO:
    //   const todo = Object.assign({}, {
    //     _id: action.payload.id,
    //     todo: action.payload.todo,
    //     completed: false,
    //     isEditing: false,
    //   });
    //
    //   return { todos: state.todos.concat(todo) }

    default:
      return Object.assign({}, state)
  }
}

export default reducer;
