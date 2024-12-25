import { useLoaderData, Link } from "react-router-dom";
import { mainFetch } from "../utils/customFetch";
export const homeLoader = async () => {
  try {
    const { data } = await mainFetch.get("/poem");
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const Home = () => {
  const { poem } = useLoaderData();
  return (
    <div className="container">
      <Link to="docs" className="docs-link">
        docs
      </Link>
      <button className="mode-btn">mode</button>
      <div className="header"></div>
      {poem && (
        <div className="random-container">
          <div className="title">{poem.title}</div>
          <div className="poem"> {poem.text}</div>
          <div className="author">
            {poem.firstName}&nbsp;
            {poem.lastName}
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
