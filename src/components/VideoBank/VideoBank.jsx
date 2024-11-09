import "./VideoBank.scss";
import Video from "../Video/Video";
import PropTypes from "prop-types";
import { useEffect, useState, useCallback } from "react";
import { getVideos } from "../../utils/brainflix-api";

function VideoBank({ activeVideoId }) {
  const [videoList, setVideoList] = useState([]);
  const filteredList = videoList.filter((video) => video.id !== activeVideoId);

  const loadVideoList = useCallback(async (page = 1) => {
    const videos = await getVideos(page);
    setVideoList(videos);
    // setPageCount(page);
  }, []);

  useEffect(() => {
    loadVideoList();
  }, [loadVideoList]);

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
  activeVideoId: PropTypes.string.isRequired,
};

export default VideoBank;
