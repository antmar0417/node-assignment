import mongoose from "mongoose";

const { Schema, model } = mongoose;

const videosSchema = new Schema({
  added: {
    type: Date,
    default: Date.now(),
  },
  comment: String,
  likes: Number,
  name: {
    type: String,
    required: true,
    trim: true,
  },
  youtubeId: String,
});

export default model("Videos", videosSchema);
