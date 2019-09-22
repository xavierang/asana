import database from "../base";

export function addComment(taskid, text, uid, time) {
  const newKey = database.ref("comments").push().key;
  return dispatch => {
    database.ref(`comments/${newKey}`).set({
      id: newKey,
      taskid,
      text,
      uid,
      created: time.toLocaleString()
    });
  };
}

export const delComment = id => {
  return dispatch => {
    database.ref(`/comments/${id}`).remove();
  };
};

export function getComment() {
  return dispatch => {
    database.ref("comments").on("value", snapshot => {
      dispatch({
        type: "GET_COMMENT",
        payload: snapshot.val()
      });
    });
  };
}
