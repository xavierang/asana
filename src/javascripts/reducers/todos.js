const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          project: action.project,
          task: action.task,
          description: action.description,
          created: action.created,
          comments: {}, //when creating task, no comments yet
          completed: false //when creating task, completed is false by default
        }
      ];
    default:
      return state;
  }
};

export default todos;
