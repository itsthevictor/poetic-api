import { useEffect, useState } from "react";
import { mainFetch } from "./utils/customFetch";
function App() {
  const [poem, setPoem] = useState(null);

  const getPoem = async () => {
    try {
      console.log("start");
      const { data } = await mainFetch.get("/poem");
      console.log(data);
      setPoem(data.poem);
      console.log("set poem");
    } catch (error) {}
  };
  useEffect(() => {
    getPoem();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    try {
      const response = await mainFetch.post("/poem", formData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="random-container">{poem ? poem.text : "test"}</div>

      <div className="add-poem">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="nume autor" name="nume" />
          <input type="text" placeholder="prenume autor" name="prenume" />
          <input type="text" placeholder="titlu" name="titlu" />
          <textarea type="text" placeholder="text" name="text" />
          <button type="submit">add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
