import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPoem = () => {
  const [newPoem, setNewPoem] = useState({
    nume: null,
    prenume: null,
    titlu: null,
    text: null,
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await mainFetch.post("/poem", newPoem);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
          onChange={(e) => setNewPoem({ ...newPoem, prenume: e.target.value })}
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
  );
};
export default AddPoem;
