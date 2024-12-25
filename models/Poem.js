import mongoose, { mongo } from "mongoose";

const PoemSchema = new mongoose.Schema({
  title: String,
  firstName: String,
  lastName: String,
  text: String,
  year: Number,
  lng: String,
  nationality: String,
});

export default mongoose.model("Poem", PoemSchema);
