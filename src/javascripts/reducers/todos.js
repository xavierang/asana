const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          task: "",
          description: "",
          created: action.created,
          completed: false,
          donetime: undefined,
          comments: []
        }
      ];

    case "DELETE_TODO":
      const todo = state.filter(t => t.id !== action.id);
      return [...todo];

    case "UPDATE_TASK_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, { task: action.text });
        }
        return todo;
      });

    case "UPDATE_DESC_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            description: action.text
          });
        }
        return todo;
      });

    case "TOGGLE_TODO":
      return state.map((todo, index) => {
        if (index === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
            donetime: action.donetime
          });
        }
        return todo;
      });
    case "GET_TODO":
      if (action.payload === null) {
        return [];
      } else {
        const temp = Object.keys(action.payload).map(
          key => action.payload[key]
        );
        return [...temp];
      }

    default:
      return state;
  }
};

export default todos;
