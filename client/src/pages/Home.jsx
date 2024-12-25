import { useLoaderData, Link } from "react-router-dom";
import { mainFetch } from "../utils/customFetch";
import { useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
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
  const theme = localStorage.getItem("dark-theme");
  console.log("app get theme", theme);
  if (theme) document.querySelector("body").setAttribute("data-theme", "dark");

  const { poem } = useLoaderData();

  return (
    <div className="container">
      <Link to="docs" className="docs-link">
        docs
      </Link>
      <ThemeToggle theme={theme} />
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
