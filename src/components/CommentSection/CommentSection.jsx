import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import PropTypes from "prop-types";
import CommentList from "../CommentList/CommentList";

function CommentSection({ comments, handleAddComment }) {
  return (
    <section className="comment-section">
      <CommentForm handleAddComment={handleAddComment} />
      <CommentList comments={comments} />
    </section>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
  handleAddComment: PropTypes.func.isRequired,
};

export default CommentSection;
