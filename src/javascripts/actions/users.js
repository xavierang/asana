export const activeUsers = id => {
  return {
    type: "SET_ACTIVE_USER",
    id: id
  };
};
