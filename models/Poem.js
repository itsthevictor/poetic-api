import mongoose, { mongo } from "mongoose";

const PoemSchema = new mongoose.Schema({
  title: String,
  authorFirstName: String,
  authorLastName: String,
  text: String,
  language: String,
});

export default mongoose.model("Poem", PoemSchema);
