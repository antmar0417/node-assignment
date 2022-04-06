import dotenv from "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();
import { mongoose } from "./utils/mongo.js";

app.use(cors());
app.options("*", cors());

app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { router } from "./routes/index.js";
app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("listening 3000"));
