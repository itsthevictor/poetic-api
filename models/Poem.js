import mongoose, { mongo } from "mongoose";
import { countryCodes } from "../constants.js";
const PoemSchema = new mongoose.Schema({
  title: String,
  firstName: String,
  lastName: String,
  text: String,
  year: Number,
  lng: String,
  nationality: {
    type: String,
    enum: countryCodes,
  },
});

export default mongoose.model("Poem", PoemSchema);
