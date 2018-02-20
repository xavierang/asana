import database from "../base";

export function addTodos(time, user) {
  return dispatch => {
    const newKey = database.ref("todos").push().key;
    database.ref(`todos/${newKey}`).set({
      id: newKey,
      task: "",
      description: "",
      created: time.toLocaleString(),
      completed: false,
      user: user,
      donetime: ""
    });
  };
}

export function delTodos(id) {
  return dispatch => {
    database.ref(`todos/${id}`).remove();

    //find comments that have similar taskid and remove as well
    database.ref("comments").once("value", snapshot => {
      const temp = Object.keys(snapshot.val()).find(key => {
        if (snapshot.val()[key].taskid === id) {
          database.ref(`comments/${key}`).remove();
        }
      });
    });
  };
}

export function updateTaskTodos(id, text) {
  return dispatch => {
    database.ref(`todos/${id}`).update({
      task: text
    });
  };
}

export function updateDescTodos(id, text) {
  return dispatch => {
    database.ref(`todos/${id}`).update({
      description: text
    });
  };
}

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

export function toggleTodos(id, donetime) {
  return dispatch => {
    database.ref(`todos/${id}`).once("value", snapshot => {
      database.ref(`todos/${id}`).update({
        completed: !snapshot.val().completed,
        donetime: donetime.toLocaleString()
      });
    });
  };
}

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
