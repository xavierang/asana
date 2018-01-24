const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          task: "",
          completed: false
        }
      ];
    case "UPDATE_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, { task: todo.task + action.char });
        }
        return todo;
      });

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
