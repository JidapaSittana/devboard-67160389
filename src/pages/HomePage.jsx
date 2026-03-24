import PostList from "../components/PostList";
import AddPostForm from "../components/AddPostForm";

//โชว์ AddPostForm ไว้บนสุด PostList วางต่อ
function HomePage() {
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", padding: "0 1rem" }}>
      <AddPostForm onAddPost={() => {}} />
      <PostList />
    </div>
  );
}

export default HomePage;
