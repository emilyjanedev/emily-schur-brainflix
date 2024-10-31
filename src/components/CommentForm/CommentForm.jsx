import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import PropTypes from "prop-types";
import { useState } from "react";

function CommentForm({ handleAddComment }) {
  const [newComment, setNewComment] = useState({ name: "", comment: "" });

  const handleNameChange = (event) => {
    setNewComment((prevComment) => ({
      ...prevComment,
      name: event.target.value,
    }));
  };

  const handleCommentChange = (event) => {
    setNewComment((prevComment) => ({
      ...prevComment,
      comment: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddComment(newComment);
    setNewComment({ name: "", comment: "" });
  };

  return (
    <>
      <form className="comment-form" onSubmit={handleSubmit}>
        <h3 className="comment-form__title">JOIN THE CONVERSATION</h3>
        <Avatar src={userAvatar} nameOfClass="comment-form__avatar" />
        <div className="comment-form__input-wrapper">
          <input
            type="text"
            name="name"
            id="name"
            className="comment-form__input"
            placeholder="Enter your name"
            value={newComment.name}
            onChange={handleNameChange}
          />
          <textarea
            name="comment"
            id="comment"
            placeholder="Add a new comment"
            className="comment-form__input comment-form__input--big"
            value={newComment.comment}
            onChange={handleCommentChange}
          ></textarea>
          <button className="comment-form__button">COMMENT</button>
        </div>
      </form>
    </>
  );
}

export default CommentForm;

CommentForm.propTypes = {
  handleAddComment: PropTypes.func.isRequired,
};

// Create State for each form entry
// Create onChange handlers for each form entry
// create validation functions for each input
// Create overall form validation function
