import mongoose from "mongoose";

const { Schema, model } = mongoose;

const characterSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  status: String,
  species: String,
  created: {
    type: Date,
    default: Date.now(),
  },
});

export default model("Character", characterSchema);
