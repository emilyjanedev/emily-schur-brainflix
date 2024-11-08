import "./VideoBank.scss";
import Video from "../Video/Video";
import PropTypes from "prop-types";
import { useEffect } from "react";

function VideoBank({
  videoList,
  activeVideoId,
  loadVideoList,
  pageCount,
  setPageCount,
}) {
  const filteredList = videoList.filter((video) => video.id !== activeVideoId);

  useEffect(() => {
    loadVideoList(pageCount);
  }, [pageCount, loadVideoList]);

  const handleClickForward = async () => {
    if (videoList.length > 0) {
      setPageCount((prevCount) => prevCount + 1);
    }
  };

  const handleClickBack = async () => {
    if (pageCount > 1) {
      setPageCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <section className="video-bank">
      <div className="video-bank__header-wrapper">
        <h2 className="video-bank__title">NEXT VIDEOS</h2>
        <div className="video-bank__icon-wrapper">
          <i
            className="video-bank__icon fa-solid fa-arrow-left"
            onClick={handleClickBack}
          ></i>
          <p className="video-bank__page-count">{pageCount}</p>
          <i
            className="video-bank__icon fa-solid fa-arrow-right"
            onClick={handleClickForward}
          ></i>
        </div>
      </div>
      {videoList.length === 0 ? (
        <div className="video-bank__message-wrapper">
          <p className="video-bank__message">No more videos to display.</p>
          <p className="video-bank__message">
            Please{" "}
            <span onClick={handleClickBack} className="video-bank__link">
              go back
            </span>{" "}
            a page.
          </p>
        </div>
      ) : (
        <ul className="video-list">
          {filteredList.map((video) => (
            <Video key={video.id} video={video} />
          ))}
        </ul>
      )}
    </section>
  );
}

VideoBank.propTypes = {
  activeVideoId: PropTypes.string.isRequired,
  videoList: PropTypes.array.isRequired,
  loadVideoList: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  setPageCount: PropTypes.func.isRequired,
};

export default VideoBank;
