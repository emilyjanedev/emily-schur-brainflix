import "./CommentList.scss";
import Comment from "../Comment/Comment";
import PropTypes from "prop-types";

function CommentList({ activeVideo }) {
  const { comments } = activeVideo;

  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

CommentList.propTypes = {
  activeVideo: PropTypes.object.isRequired,
};

export default CommentList;
