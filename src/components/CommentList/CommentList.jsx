import Comment from "../Comment/Comment";
import PropTypes from "prop-types";

function CommentList({ activeVideo }) {
  const { comments } = activeVideo;

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}

CommentList.propTypes = {
  activeVideo: PropTypes.object.isRequired,
};

export default CommentList;
