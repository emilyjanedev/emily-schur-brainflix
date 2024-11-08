import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import PropTypes from "prop-types";
import CommentList from "../CommentList/CommentList";
import { useState, useEffect, useCallback } from "react";
import {
  getComments,
  postComment,
  deleteComment,
} from "../../utils/brainflix-api";

function CommentSection({ activeVideoId, commentCountUpdate }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const loadComments = async () => {
      setComments(await getComments(activeVideoId));
    };
    loadComments();
  }, [activeVideoId]);

  const handleCommentUpdate = useCallback(
    async (commentRequest) => {
      if (commentRequest.action === "post") {
        await postComment(activeVideoId, commentRequest.newComment);
      }

      if (commentRequest.action === "delete") {
        await deleteComment(activeVideoId, commentRequest.commentId);
      }

      const updatedComments = await getComments(activeVideoId);
      setComments(updatedComments);
      commentCountUpdate(updatedComments.length);
    },
    [activeVideoId, commentCountUpdate]
  );
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
  commentCountUpdate: PropTypes.func.isRequired,
  activeVideoId: PropTypes.string.isRequired,
};

export default CommentSection;
