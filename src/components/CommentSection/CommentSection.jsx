import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import PropTypes from "prop-types";
import CommentList from "../CommentList/CommentList";

function CommentSection({ comments, handleCommentUpdate }) {
  return (
    <section className="comment-section">
      <CommentForm handleCommentUpdate={handleCommentUpdate} />
      <CommentList comments={comments} />
    </section>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
  handleCommentUpdate: PropTypes.func.isRequired,
};

export default CommentSection;
