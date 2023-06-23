import { Route, Routes } from "react-router-dom";
import AllPosts from "./pages/AllPosts";
import About from "./pages/About";
import PostDetails from "./pages/PostDetails";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllPosts />} />
          <Route path="about" element={<About />} />
          <Route path="posts/:id" element={<PostDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
