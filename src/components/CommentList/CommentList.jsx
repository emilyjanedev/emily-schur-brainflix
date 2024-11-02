import "./CommentList.scss";
import Comment from "../Comment/Comment";
import PropTypes from "prop-types";

function CommentList({ comments, handleCommentUpdate }) {
  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          handleCommentUpdate={handleCommentUpdate}
        />
      ))}
    </ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  handleCommentUpdate: PropTypes.func.isRequired,
};

export default CommentList;
