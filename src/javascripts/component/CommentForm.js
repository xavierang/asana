import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import Textarea from "react-expanding-textarea";
import { addComment } from "../actions/comments";

class CommentForm extends React.Component {
  componentDidMount() {
    const photoURL = this.props.user.photoURL;
    //set background-image url for avatar
    document.querySelector(
      ".c-avatar"
    ).style.backgroundImage = `url('${photoURL}')`;
  }

  render() {
    const { user, selectedtask, onCommentButton } = this.props;

    return (
      <footer className="o-card__footer">
        <div className="c-form__comment">
          <form className="c-formcomment">
            <div className="c-formcomment__header">
              <div className="c-avatar" />
            </div>

            <div className="c-formcomment__body">
              <label htmlFor="description" className="u-hidden-visually">
                Comment
              </label>
              <Textarea
                className="c-formcomment__body-top c-text  "
                id="comment"
                type="text"
                placeholder="Write a comment..."
                onFocus={e => {
                  e.target.placeholder = "";
                  e.target.parentElement.classList.add("c-text--glow");
                }}
                onBlur={e => {
                  e.target.placeholder = "Write a comment...";
                  e.target.parentElement.classList.remove("c-text--glow");
                }}
              />

              <div className="c-formcomment__body-btm">
                <button
                  className="c-btn  c-btn--filled"
                  onClick={e => {
                    e.preventDefault();
                    const commentTextArea = document.getElementById("comment");
                    onCommentButton(
                      selectedtask.id,
                      commentTextArea.value,
                      user.uid
                    );
                    commentTextArea.value = "";
                  }}
                >
                  Comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </footer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCommentButton: (id, value, uid) => {
      dispatch(addComment(id, value, uid, moment()));
    }
  };
};

CommentForm = connect(null, mapDispatchToProps)(CommentForm);

export default CommentForm;
