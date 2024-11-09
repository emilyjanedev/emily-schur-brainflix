import "./Comment.scss";
import PropTypes from "prop-types";
import { formatDistance } from "date-fns";
import { formatString } from "../../utils/stringUtils";
import { useState, useMemo } from "react";
import UiAvatarsApi from "../../utils/ui-avatars-api";
import Avatar from "../Avatar/Avatar";

function Comment({ comment, handleCommentUpdate }) {
  const { name, comment: description, timestamp, id, likes } = comment;
  const [likeStyle, setLikeStyle] = useState("");
  const uiAvatarsApi = useMemo(() => new UiAvatarsApi(), []);

  const handleClick = (event) => {
    if (event.target.id === "delete") {
      handleCommentUpdate({ action: event.target.id, commentId: id });
    } else {
      if (likeStyle) {
        setLikeStyle("");
      } else {
        setLikeStyle("comment__icon--liked");
        handleCommentUpdate({ action: event.target.id, commentId: id });
      }
    }
  };
  return (
    <li className="comment-list__item">
      <article className="comment" id={id}>
        <Avatar
          nameOfClass="comment__avatar"
          src={uiAvatarsApi.getAvatar(name)}
        />
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
            <p className="comment__like-count">{likes}</p>
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
