import { useLoaderData } from "react-router-dom";
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
      {poem && (
        <div className="random-container">
          {" "}
          <div className="title">{poem.titlu}</div>
          <div className="poem"> {poem.text}</div>
          <div className="author">
            {poem.prenume}&nbsp;
            {poem.nume}
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
