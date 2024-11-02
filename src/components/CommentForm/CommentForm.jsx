import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import PropTypes from "prop-types";
import { useState } from "react";

function CommentForm({ handleCommentUpdate }) {
  const [newComment, setNewComment] = useState({ name: "", comment: "" });
  const [errorMessages, setErrorMessages] = useState({});

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

  const isNameValid = () => {
    return newComment.name.length > 0 && newComment.name.length <= 30;
  };

  const isCommentValid = () => {
    return newComment.comment.length > 0 && newComment.comment.length <= 10000;
  };

  const isFormValid = () => {
    let errors = {};

    if (!isNameValid()) {
      errors.name = "Name is required. 30 character limit.";
    }

    if (!isCommentValid()) {
      errors.comment = "Comment is required. 10,000 character limit.";
    }

    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      handleCommentUpdate(newComment, "post");
      setNewComment({ name: "", comment: "" });
      setErrorMessages({});
    }
  };

  return (
    <>
      <form className="comment-form" onSubmit={handleSubmit}>
        <h3 className="comment-form__title">JOIN THE CONVERSATION</h3>
        <Avatar src={userAvatar} nameOfClass="comment-form__avatar" />
        <div className="comment-form__input-wrapper">
          <div className="comment-form__error-wrapper">
            <input
              type="text"
              name="name"
              id="name"
              className={`comment-form__input ${
                errorMessages.name && "comment-form__input--error"
              }`}
              placeholder="Enter your name"
              value={newComment.name}
              onChange={handleNameChange}
            />
            {errorMessages.name && (
              <p className="comment-form__error-message">
                {errorMessages.name}
              </p>
            )}
          </div>
          <div className="comment-form__error-wrapper">
            <textarea
              name="comment"
              id="comment"
              placeholder="Add a new comment"
              className={`comment-form__input comment-form__input--big ${
                errorMessages.comment && "comment-form__input--error"
              }`}
              value={newComment.comment}
              onChange={handleCommentChange}
            ></textarea>
            {errorMessages.comment && (
              <p className="comment-form__error-message">
                {errorMessages.comment}
              </p>
            )}
          </div>
          <button className="comment-form__button">COMMENT</button>
        </div>
      </form>
    </>
  );
}

export default CommentForm;

CommentForm.propTypes = {
  handleCommentUpdate: PropTypes.func.isRequired,
};

// Create State for each form entry
// Create onChange handlers for each form entry
// create validation functions for each input
// Create overall form validation function
