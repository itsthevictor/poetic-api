import { useLoaderData } from "react-router-dom";
import { mainFetch } from "../utils/customFetch";
export const homeLoader = async () => {
  try {
    const { data } = await mainFetch.get("/poem");
    return data.poem;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const Home = () => {
  const poem = useLoaderData();
  return (
    <div className="container">
      <div className="random-container">{poem ? poem.text : "test"}</div>
    </div>
  );
};
export default Home;
