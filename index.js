#! /usr/bin/env node
import fs from "fs/promises";
import fetch from "node-fetch";
import "dotenv/config";
import yargs from "yargs";

const { API_KEY, API_ENDPOINT } = process.env;

const getData = async () => {
  const r = await fetch(`${API_ENDPOINT}/movie/now_playing?api_key=${API_KEY}`);
  return await r.json();
};

const getCastByMovieId = async (id) => {
  const r = await fetch(
    `${API_ENDPOINT}/movie/${id}/credits?api_key=${API_KEY}`
  );

  return await r.json();
};

const { results } = await getData();
const { title, id } = results[0];

const { cast } = await getCastByMovieId(id);
const { name } = cast[0];

const { argv } = yargs(process.argv);

if (argv.save) {
  await fs.writeFile(
    new URL("movie.txt", import.meta.url),
    `${title} featuring ${name}`,
    "utf-8"
  );
} else {
  console.log(`${title} featuring ${name}`);
}

// CLI EXAMPLE
// import yargs from "yargs";

// const { argv } = yargs(process.argv);
// console.log(argv);
