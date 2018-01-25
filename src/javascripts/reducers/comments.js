const comments = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          id: action.id,
          taskid: action.taskid,
          text: action.text,
          created: action.created,
          likes: 0
        }
      ];

    case "DELETE_COMMENT":
      const comment = state.filter(c => c.id !== action.id);
      return [...comment];

    case "LIKE_COMMENT":
      return state.map(c => {
        if (c.id === action.id) {
          return Object.assign({}, c, { likes: c.likes + 1 });
        }
        return c;
      });

    default:
      return state;
  }
};

export default comments;
