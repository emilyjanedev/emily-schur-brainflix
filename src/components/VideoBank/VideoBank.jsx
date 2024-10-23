import "./VideoBank.scss";
import VideoCard from "../VideoCard/VideoCard";

const testVideo = {
  id: "84e96018-4022-434e-80bf-000ce4cd12b8",
  title: "The Future of Artificial Intelligence",
  channel: "Aiden Thompson",
  image:
    "https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg",
  description:
    "Explore the cutting-edge developments and predictions for Artificial Intelligence in the coming years. From revolutionary breakthroughs in machine learning to the ethical considerations influencing AI advancements, this exploration transcends the boundaries of mere speculation. Join us on a journey that navigates the intricate interplay between innovation, ethics, and the ever-evolving tech frontier.",
  views: "980,544",
  likes: "22,479",
  duration: "4:01",
  video: "https://unit-3-project-api-0a5620414506.herokuapp.com/stream",
  timestamp: 1691471862000,
  comments: [
    {
      id: "35bba08b-1b51-4153-ba7e-6da76b5ec1b9",
      name: "Noah Duncan",
      comment:
        "Your insights into the future of AI are enlightening! The intersection of technology and ethics is particularly thought-provoking. Keep us updated on the tech front!",
      likes: 0,
      timestamp: 1691731062000,
    },
    {
      id: "091de676-61af-4ee6-90de-3a7a53af7521",
      name: "Terry Wong",
      comment:
        "This video is a fantastic overview of the AI landscape. Your ability to distill complex concepts into digestible content is impressive. Can't wait for more tech insights!",
      likes: 0,
      timestamp: 1691644662000,
    },
    {
      id: "66b7d3c7-4023-47f1-a02c-520c9ca187a6",
      name: "Janice Rodriguez",
      comment:
        "Your channel is my go-to source for staying updated on tech trends. The exploration of AI's future implications is both informative and exciting. Kudos on another excellent video!",
      likes: 1,
      timestamp: 1691558262000,
    },
  ],
};

function VideoBank() {
  return (
    <section className="video-bank">
      <h2 className="video-bank__title">NEXT VIDEOS</h2>
      <div className="video-bank__list">
        <VideoCard video={testVideo} />
      </div>
    </section>
  );
}

export default VideoBank;
