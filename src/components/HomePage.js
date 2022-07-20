import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useQuery from "../hooks/useQueryAdvanced";
import About from "./About";
import ArticleList from "./ArticleList";

function HomePage() {
  // fetch data for posts
  
  const { data: posts, isLoaded } = useQuery("http://localhost:4000/posts");

  // set the document title
  useDocumentTitle("Underreacted | Home");

  // const [isLoaded, setIsLoaded] = useState(false);
  // const [posts, setPosts] = useState([]);

  // // useEffect(() => {
  //   setIsLoaded(false);
  //   fetch("http://localhost:4000/posts")
  //     .then((r) => r.json())
  //     .then((posts) => {
  //       setPosts(posts);
  //       setIsLoaded(true);
  //     });
  // }, []);

  // set the document title
  // useEffect(() => {
  //   document.title = "Underreacted | Home";
  // }, []);

  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={posts} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;
