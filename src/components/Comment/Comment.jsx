import "./Comment.scss";
import PropTypes from "prop-types";
import { formatDistance } from "date-fns";
import { formatString } from "../../utils/stringUtils";
import { useMemo } from "react";
import UiAvatarsApi from "../../utils/ui-avatars-api";
import Avatar from "../Avatar/Avatar";

function Comment({ comment, handleCommentUpdate }) {
  const { name, comment: description, timestamp, id } = comment;
  const uiAvatarsApi = useMemo(() => {
    return new UiAvatarsApi([
      "length=1",
      "rounded=true",
      "size=100",
      "background=random",
    ]);
  }, []);

  const handleClick = () => {
    handleCommentUpdate({ action: "delete", commentId: id });
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
};

export default Comment;
