import "./VideoBank.scss";
import Video from "../Video/Video";
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiBaseUrl, apiKey } from "../../utils/api";

function VideoBank({ activeVideo }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `${apiBaseUrl}/videos?api_key=${apiKey}`
        );
        setVideos(response.data);
      } catch (error) {
        console.error("Could not fetch videos", error);
      }
    };
    fetchVideos();
  }, []);

  const filteredList = videos.filter((video) => video.id !== activeVideo.id);

  return (
    <section className="video-bank">
      <h2 className="video-bank__title">NEXT VIDEOS</h2>
      <ul className="video-list">
        {filteredList.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </ul>
    </section>
  );
}

VideoBank.propTypes = {
  activeVideo: PropTypes.object.isRequired,
};

export default VideoBank;
