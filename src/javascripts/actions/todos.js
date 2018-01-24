let nextTodosId = 0;

export const addTodos = () => {
  return {
    type: "ADD_TODO",
    id: nextTodosId++
  };
};
