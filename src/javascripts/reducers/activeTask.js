const activeTask = (state = "NONE", action) => {
  switch (action.type) {
    case "SET_ACTIVE_TASK":
      return action.id;
    default:
      return state;
  }
};

export default activeTask;
