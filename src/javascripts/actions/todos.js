import database from "../base";

let nextTodosId = 0;

export const addTodos = time => {
  const newKey = database.ref("todos").push().key;
  return dispatch => {
    database.ref(`todos/${newKey}`).set({
      id: newKey,
      task: "",
      description: "",
      created: time.toLocaleString(),
      completed: false
    });
  };
  // return {
  //   type: "ADD_TODO",
  //   id: nextTodosId++,
  //   created: time
  // };
};

export const delTodos = id => {
  return dispatch => {
    database.ref(`todos/${id}`).remove();
  };
  // return {
  //   type: "DELETE_TODO",
  //   id: id
  // };
};

export const updateTaskTodos = (id, text) => {
  return dispatch => {
    database.ref(`todos/${id}`).update({
      task: text
    });
  };
  // return {
  //   type: "UPDATE_TASK_TODO",
  //   id: id,
  //   text: text
  // };
};

export const updateDescTodos = (id, text) => {
  return dispatch => {
    database.ref(`todos/${id}`).update({
      description: text
    });
  };
  // return {
  //   type: "UPDATE_DESC_TODO",
  //   id: id,
  //   text: text
  // };
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
  database
    .ref(`todos/${id}`)
    .once("value")
    .then(snapshot => {
      const status = snapshot.val().completed;
    });

  console.log(status);

  return dispatch => {
    database.ref(`todos/${id}`).update({
      completed: !status,
      donetime: donetime.toLocaleString()
    });
  };
  // return {
  //   type: "TOGGLE_TODO",
  //   id: id,
  //   donetime: donetime
  // };
};

export function getTodos() {
  return dispatch => {
    database.ref("todos").on("value", snapshot => {
      dispatch({
        type: "GET_TODO",
        payload: snapshot.val()
      });
    });
  };
}
