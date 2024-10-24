import "./CommentForm.scss";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/icons/add_comment.svg";

function CommentForm() {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form action="submit" className="comment-form" onSubmit={submitHandler}>
      <Avatar src={userAvatar} nameOfClass="comment-form__avatar" />
      <div className="comment-form__input-wrapper">
        <label htmlFor="comment" className="comment-form__label">
          JOIN THE CONVERSATION
        </label>
        <textarea
          type="text"
          name="comment"
          id="comment"
          placeholder="Add a new comment"
          className="comment-form__input"
        ></textarea>
        <Button
          nameOfClass="comment-form__button"
          icon={commentIcon}
          cta="COMMENT"
        />
      </div>
    </form>
  );
}

export default CommentForm;
