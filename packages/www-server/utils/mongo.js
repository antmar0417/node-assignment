import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI, (error) => {
  if (error) throw error;

  console.log("MongoDB connection successful");
});

// Add NodeJS native promises to Mongoose
// Allows us to use async/await with Mongoose methods
mongoose.Promise = global.Promise;

/*
    Import models - singleton,
    allows us to do `const ModelName = mongoose.model('ModelName');`
    in any file
*/
// import "../models/ModelName.js";
import "../models/Videos.js";

export { mongoose };
