if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const knex = require("./db/connection");

app.use(express.json());

async function getMoviesFromTable() {
  console.log("HELLO!------");
  return knex("movies").select("*");
}

async function list(req, res) {
  const data = await getMoviesFromTable();

  res.json({ data });
}

app.get("/movies", list);

module.exports = app;
