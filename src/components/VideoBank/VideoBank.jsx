import "./VideoBank.scss";
import Video from "../Video/Video";
import videos from "../../data/video-details.json";

function VideoBank() {
  const filteredList = videos.filter(
    (video) => video.id !== "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  return (
    <section className="video-bank">
      <h2 className="video-bank__title">NEXT VIDEOS</h2>
      <div className="video-bank__list">
        {filteredList.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}

export default VideoBank;
