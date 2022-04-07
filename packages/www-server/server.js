import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import express from "express";
const app = express();

// Initiate mongo config & import logging tool
import { mongoose } from "./utils/index.js";

// Cors config - allow all
app.use(cors());
app.options("*", cors()); // enable pre-flight for DELETE request

/*
    Middlewares that allow Express to accept
    form and JSON data in requests
*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP request logger middleware
app.use(morgan("tiny"));

// Routes
import { router } from "./routes/index.js";
app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express server listening on ${PORT}`));
