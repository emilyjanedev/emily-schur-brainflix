import "./Comment.scss";
import PropTypes from "prop-types";
import { formatDistance } from "date-fns";
import { formatString } from "../../utils/stringUtils";
import Avatar from "../Avatar/Avatar";

function Comment({ comment }) {
  const { name, comment: description, timestamp, id } = comment;

  return (
    <li className="comment-list__item">
      <article className="comment" id={id}>
        <Avatar nameOfClass="comment__avatar" />
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
        </div>
      </article>
    </li>
  );
}
Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
