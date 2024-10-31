import "./CommentList.scss";
import Comment from "../Comment/Comment";
import PropTypes from "prop-types";

function CommentList({ comments }) {
  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;
