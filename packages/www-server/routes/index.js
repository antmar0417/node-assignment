import express from "express";
const router = express.Router();
import mongoose from "mongoose";

/*
    Models for making calls to database should be added here, ex:
    const ModelName = mongoose.model('ModelName');
*/
const Videos = mongoose.model("Videos");

/* Add routes here */
router.get("/some-route", async (req, res) => {
  res.send("I'm alive");
});

router.get("/entries", async (req, res) => {
  const videos = await Videos.find().sort({
    name: "ascending",
  });
  res.json(videos);
});

router.post("/entries", async (req, res) => {
  const { comment, name, response, youtubeId } = req.body;
  console.log(name);

  const newVideo = new Videos({
    comment,
    name,
    response,
    youtubeId,
  });
  const r = await newVideo.save();
  res.json(r);
});

router.delete("/entries/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const video = await Videos.findByIdAndDelete(id);

    if (video) {
      res.json(video);
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(404).send(`No video found with ID: ${id}`);
  }
});

router.put("/entries/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Videos.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true }
    );

    res.json(video);
  } catch (error) {
    res.status(404).send(`No video found with ID: ${id}`);
  }
});

export { router };
