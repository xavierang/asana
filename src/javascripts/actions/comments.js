let nextCommentId = 0;

//returns an object for addComment actions
export const addComment = (taskid, text, time) => {
  return {
    type: "ADD_COMMENT",
    id: nextCommentId++,
    taskid: taskid,
    text: text,
    created: time
  };
};

export const delComment = id => {
  return {
    type: "DELETE_COMMENT",
    id: id
  };
};
