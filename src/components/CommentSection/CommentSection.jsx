import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import PropTypes from "prop-types";
import CommentList from "../CommentList/CommentList";

function CommentSection({ comments }) {
  return (
    <section className="comment-section">
      <CommentForm />
      <CommentList comments={comments} />
    </section>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentSection;
