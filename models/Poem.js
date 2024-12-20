import mongoose, { mongo } from "mongoose";

const PoemSchema = new mongoose.Schema({
  titlu: String,
  prenume: String,
  nume: String,
  text: String,
  an: Number,
  limba: String,
});

export default mongoose.model("Poem", PoemSchema);
