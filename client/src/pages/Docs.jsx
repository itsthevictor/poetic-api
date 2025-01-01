import { mainFetch } from "../utils/customFetch";
import { Link, useLoaderData } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
export const docsLoader = async () => {
  try {
    const { data } = await mainFetch.get("/poem/stats");
    return data;
  } catch (error) {
    console.log(error);

    return null;
  }
};
const Docs = () => {
  const { count } = useLoaderData();
  const theme = localStorage.getItem("dark-theme");
  return (
    <div className="container docs-container">
      <Link to="/" className="docs-link">
        înapoi
      </Link>
      <ThemeToggle theme={theme} />
      <div className="api-container">
        <p className="url">
          <span>GET:</span>&nbsp;https://poetic-api.ro/api/v1/poem
        </p>

        <span>Nr. poeme:&nbsp;</span>
        {count}
      </div>
    </div>
  );
};
export default Docs;
