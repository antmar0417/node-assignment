import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI, (error) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log("Connected");
});

// import "../models/Game.js";
import "../models/Character.js";

export { mongoose };
