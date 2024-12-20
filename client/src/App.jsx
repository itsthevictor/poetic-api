import { useEffect, useRef, useState } from "react";
import { mainFetch } from "./utils/customFetch";
function App() {
  const [poem, setPoem] = useState(null);
  const [newPoem, setNewPoem] = useState({
    nume: null,
    prenume: null,
    titlu: null,
    text: null,
  });

  const getPoem = async () => {
    try {
      const { data } = await mainFetch.get("/poem");
      setPoem(data.poem);
    } catch (error) {}
  };

  useEffect(() => {
    getPoem();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await mainFetch.post("/poem", newPoem);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="random-container">{poem ? poem.text : "test"}</div>

      <div className="add-poem">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="nume autor"
            name="nume"
            onChange={(e) => setNewPoem({ ...newPoem, nume: e.target.value })}
          />
          <input
            type="text"
            placeholder="prenume autor"
            name="prenume"
            onChange={(e) =>
              setNewPoem({ ...newPoem, prenume: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="titlu"
            name="titlu"
            onChange={(e) => setNewPoem({ ...newPoem, titlu: e.target.value })}
          />
          <textarea
            type="text"
            placeholder="text"
            name="text"
            onChange={(e) => setNewPoem({ ...newPoem, text: e.target.value })}
          />
          <button type="submit">add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
