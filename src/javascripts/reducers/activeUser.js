const activeUser = (state = "NONE", action) => {
  switch (action.type) {
    case "SET_ACTIVE_USER":
      return action.id;
    default:
      return state;
  }
};

export default activeUser;
