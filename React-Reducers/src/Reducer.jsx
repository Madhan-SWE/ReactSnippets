import { TODO_ACTIONS } from "./ACTIONS";

function toDoReducer(state, action) {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      console.log(action);
      return [
        ...state,
        {
          id: Date.now(),
          name: action.payload.name,
          completed: false
        }
      ];

    case TODO_ACTIONS.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) return todo;
        return {
          ...todo,
          completed: !todo.completed
        };
      });

    case TODO_ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
}

export default toDoReducer;
