import React from "react";

class Comment extends React.Component {
  render() {
    return (
      <div className="c-form__comment">
        <form className="c-formcomment">
          <div className="c-formcomment__header">
            <div className="c-avatar" />
          </div>

          <div className="c-formcomment__body">
            <label htmlFor="description" className="u-hidden-visually">
              Comment
            </label>
            <textarea
              className="c-formcomment__body-top c-text c-formcomment__text"
              type="text"
              placeholder="Write a comment..."
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "Write a comment...")}
            />

            <div className="c-formcomment__body-btm">
              <button type="submit" className="c-btn c-btn--filled">
                Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Comment;
