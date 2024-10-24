import "./Comment.scss";
import PropTypes from "prop-types";
import { formatDistance } from "date-fns";
import { formatString } from "../../utils/stringUtils";
import Avatar from "../Avatar/Avatar";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";

function Comment({ comment }) {
  const { name, comment: description, timestamp, id } = comment;

  return (
    <article className="comment" id={id}>
      <Avatar src={userAvatar} nameOfClass="comment__avatar" />
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
  );
}
Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
