const comments = (state = [], action) => {
  switch (action.type) {
    // case "ADD_COMMENT":
    //   return [
    //     ...state,
    //     {
    //       id: action.id,
    //       taskid: action.taskid,
    //       text: action.text,
    //       created: action.created
    //     }
    //   ];

    // case "DELETE_COMMENT":
    //   const comment = state.filter(c => c.id !== action.id);
    //   return [...comment];

    // case "LIKE_COMMENT":
    //   return state.map(c => {
    //     if (c.id === action.id) {
    //       return Object.assign({}, c, { likes: c.likes + 1 });
    //     }
    //     return c;
    //   });

    case "GET_COMMENT":
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

export default comments;
