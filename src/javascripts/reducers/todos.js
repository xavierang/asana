const todos = (state = [], action) => {
  switch (action.type) {
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
