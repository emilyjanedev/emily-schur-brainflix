import "./CommentSection.scss";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import PropTypes from "prop-types";

function CommentSection({ activeVideo }) {
  const { comments } = activeVideo;
  return (
    <section className="comment-section">
      <CommentForm />
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </section>
  );
}

CommentSection.propTypes = {
  activeVideo: PropTypes.object.isRequired,
};

export default CommentSection;
