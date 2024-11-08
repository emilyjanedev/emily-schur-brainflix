import "./CommentList.scss";
import Comment from "../Comment/Comment";
import PropTypes from "prop-types";

function CommentList({ comments, handleCommentUpdate, activeVideoId }) {
  if (comments.length === 0) {
    return <p className="comment-list__message">No comments.</p>;
  }
  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          activeVideoId={activeVideoId}
          handleCommentUpdate={handleCommentUpdate}
        />
      ))}
    </ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  handleCommentUpdate: PropTypes.func.isRequired,
  activeVideoId: PropTypes.string.isRequired,
};

export default CommentList;
