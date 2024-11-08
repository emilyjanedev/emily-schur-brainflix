import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import PropTypes from "prop-types";
import CommentList from "../CommentList/CommentList";

function CommentSection({ comments, handleCommentUpdate, activeVideoId }) {
  return (
    <section className="comment-section">
      <CommentForm handleCommentUpdate={handleCommentUpdate} />
      <CommentList
        comments={comments}
        activeVideoId={activeVideoId}
        handleCommentUpdate={handleCommentUpdate}
      />
    </section>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
  handleCommentUpdate: PropTypes.func.isRequired,
  activeVideoId: PropTypes.string.isRequired,
};

export default CommentSection;
