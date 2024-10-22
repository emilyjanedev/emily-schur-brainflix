import "./App.scss";
import Header from "./components/Header/Header";
import CommentForm from "./components/CommentForm/CommentForm";
import Comment from "./components/Comment/Comment";
const testComment = {
  name: "Emily Schur",
  comment:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eaque et temporibus Blanditiis dolorum labore non suscipit, quia doloribus iusto quidem libero repellendus praesentium molestias expedita sit ullam eum natus",
  timestamp: 1691471862000,
};

function App() {
  return (
    <>
      <Header />
      <CommentForm />
      <Comment comment={testComment} />
    </>
  );
}

export default App;
