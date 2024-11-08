import "./Comment.scss";
import PropTypes from "prop-types";
import { formatDistance } from "date-fns";
import { formatString } from "../../utils/stringUtils";
import { useState } from "react";
import { likeComment } from "../../utils/brainflix-api";
import { getAvatar } from "../../utils/ui-avatars-api";
import Avatar from "../Avatar/Avatar";

function Comment({ comment, handleCommentUpdate, activeVideoId }) {
  const { name, comment: description, timestamp, id } = comment;
  const [likeCount, setLikeCount] = useState(comment.likes);
  const [likeStyle, setLikeStyle] = useState("");

  const handleCommentLike = async () => {
    const updatedLikeCount = await likeComment(activeVideoId, id);
    setLikeCount(updatedLikeCount);
  };

  const handleClick = (event) => {
    console.log(event.target.id);
    if (event.target.id === "delete") {
      handleCommentUpdate({ action: event.target.id, commentId: id });
    } else {
      if (likeStyle) {
        setLikeStyle("");
      } else {
        setLikeStyle("comment__icon--liked");
        handleCommentLike();
      }
    }
  };
  return (
    <li className="comment-list__item">
      <article className="comment" id={id}>
        <Avatar nameOfClass="comment__avatar" src={getAvatar(name)} />
        <div className="comment__content">
          <h3 className="comment__author">{name}</h3>
          <p className="comment__timestamp">
            {formatString(
              formatDistance(timestamp, new Date(), {
                addSuffix: true,
                includeSeconds: true,
              })
            )}
          </p>
          <p className="comment__description">{description}</p>
          <div className="comment__icon-container">
            <p className="comment__like-count">{likeCount}</p>
            <i
              className={`comment__icon fa-solid fa-heart ${likeStyle}`}
              id="like"
              onClick={handleClick}
            ></i>
            <i
              className="comment__icon fa-solid fa-trash"
              id="delete"
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </article>
    </li>
  );
}
Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  handleCommentUpdate: PropTypes.func.isRequired,
  activeVideoId: PropTypes.string.isRequired,
};

export default Comment;
