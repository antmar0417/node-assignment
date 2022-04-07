import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI, (error) => {
  if (error) throw error;

  console.log("MongoDB connection successful");
});

mongoose.Promise = global.Promise;

import "../models/Videos.js";

export { mongoose };
