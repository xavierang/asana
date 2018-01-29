let nextTodosId = 0;

export const addTodos = time => {
  return {
    type: "ADD_TODO",
    id: nextTodosId++,
    created: time
  };
};

export const delTodos = id => {
  return {
    type: "DELETE_TODO",
    id: id
  };
};

export const updateTaskTodos = (id, text) => {
  return {
    type: "UPDATE_TASK_TODO",
    id: id,
    text: text
  };
};

export const updateDescTodos = (id, text) => {
  return {
    type: "UPDATE_DESC_TODO",
    id: id,
    text: text
  };
};

export const activeTodos = id => {
  return {
    type: "SET_ACTIVE_TASK",
    id: id
  };
};

export const setFilter = filter => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter: filter
  };
};

export const toggleTodos = (id, donetime) => {
  return {
    type: "TOGGLE_TODO",
    id: id,
    donetime: donetime
  };
};
