import express from "express";
import { readFile } from "fs/promises";
import mongoose from "mongoose";

const router = express.Router();
const Character = mongoose.model("Character");

router.post("/characters", async (req, res) => {
  const { name, status, species } = req.body;

  const newCharacter = new Character({
    name,
    status,
    species,
  });
  const r = await newCharacter.save();
  res.json(r);
});

router.get("/", async (req, res) => {
  const characters = await Character.find().sort({
    title: "ascending",
  });
  res.json(characters);
});

router.delete("/characters/:id", async (req, res) => {
  const c = await Character.findByIdAndDelete(req.params.id);

  if (!c) {
    res.status(404).send("Character not found!");
  }
  res.json(c);
});

router.put("/characters/:id/:status", async (req, res) => {
  const { id, status } = req.params;

  const c = await Character.findByIdAndUpdate(
    id,
    {
      status,
    },
    {
      new: true,
    }
  );
  res.json(c);
});

// const router = express.Router();
// const Game = mongoose.model("Game");

// router.post("/games", async (req, res) => {
//   const { title, publisher, year } = req.body;

//   const newGame = new Game({
//     title,
//     publisher,
//     year,
//   });
//   const r = await newGame.save();
//   res.json(r);
// });

// router.get("/", async (req, res) => {
//   const games = await Game.find().sort({
//     title: "ascending",
//   });
//   res.json(games);
// });

// --------- CHARACTERS ---------
// let characters = JSON.parse(
//   await readFile(new URL("../data/characters.json", import.meta.url))
// );

// http://localhost:3000/characters
// router.get("/characters", (req, res) => {
//   res.json(characters);
// });

//2
// router.post("/characters", (req, res) => {
//   const id = characters.length + 1;

//   characters.push({
//     id,
//     ...req.body,
//   });
//   res.send(characters);
// });

//3
// router.put("/characters/:id/:status", (req, res) => {
//   const { id, status } = req.params;
//   characters = characters.map((character) => {
//     if (character.id === parseInt(id)) {
//       character.status = status;
//     }
//   });
//   res.json(characters);
// });

// router.delete("/characters/:id", (req, res) => {
//   const { id } = req.params;
//   characters = characters.filter((character) => character.id !== parseInt(id));
//   res.json(characters);
// });

// ---------- USERS -----------
// let users = JSON.parse(
//   await readFile(new URL("../data/users.json", import.meta.url))
// );

// router.post("/", (req, res) => {
//   res.send("ok");
// });

// router.get("/users", (req, res) => {
//   res.json(users);
// });

// router.post("/users", (req, res) => {
//   const id = users.length + 1;

//   users.push({
//     id,
//     ...req.body,
//   });
//   res.send(users);
// });

// router.put("/users/:id/:occupation", (req, res) => {
//   const { id, occupation } = req.params;
//   users = users.map((user) => {
//     if (user.id === parseInt(id)) {
//       user.occupation = occupation;
//     }
//   });
//   res.json(users);
// });

// router.delete("/users/:id", (req, res) => {
//   const { id } = req.params;
//   users = users.filter((user) => user.id !== parseInt(id));
//   res.json(users);
// });

// For both name and id
// router.delete("/users/:id/:name", (req, res) => {
//     const { id, name } = req.params;
//     users = users.filter(
//       (user) => user.name !== name && user.id !== parseInt(id)
//     );
//     res.json(users);
//   });

export { router };
