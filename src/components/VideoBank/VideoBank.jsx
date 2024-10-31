import "./VideoBank.scss";
import Video from "../Video/Video";
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiBaseUrl, apiKey } from "../../utils/api";

function VideoBank({ videoList, activeVideoId }) {
  const filteredList = videoList.filter((video) => video.id !== activeVideoId);

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
  videoList: PropTypes.object.isRequired,
};

export default VideoBank;
