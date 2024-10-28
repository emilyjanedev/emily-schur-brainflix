import "./VideoBank.scss";
import Video from "../Video/Video";
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";

function VideoBank({ activeVideo, changeActiveVideo }) {
  const [videos, setVideos] = useState([]);
  const apiUrl = import.meta.env.VITE_BRAINFLIX_API_BASE_URL;
  const apiKey = import.meta.env.VITE_BRAINFLIX_API_KEY;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${apiUrl}/videos?api_key=${apiKey}`);
        setVideos(response.data);
      } catch (error) {
        console.error("Could not fetch videos", error);
        setVideos([]);
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
          <Video
            key={video.id}
            video={video}
            changeActiveVideo={changeActiveVideo}
          />
        ))}
      </ul>
    </section>
  );
}

VideoBank.propTypes = {
  activeVideo: PropTypes.object.isRequired,
  changeActiveVideo: PropTypes.func.isRequired,
};

export default VideoBank;
