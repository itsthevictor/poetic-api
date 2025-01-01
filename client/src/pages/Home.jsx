import { useLoaderData, Link } from "react-router-dom";
import { mainFetch } from "../utils/customFetch";
import { useEffect, useState, useRef } from "react";
import useDeviceSize from "../hooks/size";
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
  // get loader data
  const { poem } = useLoaderData();

  // set theme from localstorage
  const theme = localStorage.getItem("dark-theme");
  if (theme) document.querySelector("body").setAttribute("data-theme", "dark");

  // state variables
  const [divHeight, setDivHeight] = useState(0);
  const ref = useRef(null);
  // get poem container height
  useEffect(() => {
    setDivHeight(ref.current.clientHeight);
  }, []);
  const [width, height] = useDeviceSize();

  return (
    <div
      className={
        divHeight < 0.8 * height ? "container flex" : "container padded"
      }
    >
      <Link to="docs" className="docs-link">
        docs
      </Link>
      <ThemeToggle theme={theme} />
      {poem ? (
        <div className="random-container" ref={ref}>
          <div className="title">{poem.title}</div>
          <div className="poem"> {poem.text}</div>
          <div className="author">
            {poem.firstName}&nbsp;
            {poem.lastName}
          </div>{" "}
        </div>
      ) : (
        <div className="unavailable">It appears the service is unavailable</div>
      )}{" "}
    </div>
  );
};
export default Home;
