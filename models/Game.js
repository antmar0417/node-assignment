import mongoose from "mongoose";

const { Schema, model } = mongoose;

const gameSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  publisher: String,
  year: Number,
  created: {
    type: Date,
    default: Date.now(),
  },
});

export default model("Game", gameSchema);
