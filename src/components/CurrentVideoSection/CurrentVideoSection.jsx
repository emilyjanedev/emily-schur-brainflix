import "./CurrentVideoSection.scss";
import CurrentVideo from "../CurrentVideo/CurrentVideo";
import CurrentVideoDetails from "../CurrentVideoDetails/CurrentVideoDetails";
import PropTypes from "prop-types";
import { format } from "date-fns";

function CurrentVideoSection({ activeVideo }) {
  return (
    <section className="current-video-section">
      <CurrentVideo activeVideo={activeVideo} />
      <CurrentVideoDetails activeVideo={activeVideo} />
    </section>
  );
}

CurrentVideoSection.propTypes = {
  activeVideo: PropTypes.object.isRequired,
};

export default CurrentVideoSection;
