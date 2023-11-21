if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors")
const moviesRouter = require("./movies/movies.router")
const app = express();


app.use(express.json());
app.use(cors())


app.use("/movies", moviesRouter);

module.exports = app;
