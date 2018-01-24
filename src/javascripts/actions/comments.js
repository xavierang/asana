let nextCommentId = 0;

//returns an object for addComment actions
export const addComment = text => {
  return {
    type: "ADD_COMMENT",
    id: nextCommentId++,
    text: text
  };
};

export const delComment = id => {
  return {
    type: "DELETE_COMMENT",
    id: id
  };
};
