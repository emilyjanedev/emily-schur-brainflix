import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/icons/add_comment.svg";
import { Navigate, useNavigate } from "react-router-dom";

function CommentForm() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
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
          />
          <textarea
            name="comment"
            id="comment"
            placeholder="Add a new comment"
            className="comment-form__input comment-form__input--big"
          ></textarea>
          <button className="comment-form__button">COMMENT</button>
        </div>
      </form>
    </>
  );
}

export default CommentForm;

// Create State for each form entry
// Create onChange handlers for each form entry
// create validation functions for each input
// Create overall form validation function
