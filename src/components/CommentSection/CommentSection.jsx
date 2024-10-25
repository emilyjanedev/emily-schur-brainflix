import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import PropTypes from "prop-types";
import CommentList from "../CommentList/CommentList";

function CommentSection({ activeVideo }) {
  return (
    <section className="comment-section">
      <CommentForm />
      <CommentList activeVideo={activeVideo} />
    </section>
  );
}

CommentSection.propTypes = {
  activeVideo: PropTypes.object.isRequired,
};

export default CommentSection;
