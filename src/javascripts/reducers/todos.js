const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          task: action.task,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map((todo, index) => {
        if (index === action.id) {
          return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todos;
