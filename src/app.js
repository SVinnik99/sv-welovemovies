if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors")
const errorHandler =require("./errors/errorHandler")
const moviesRouter = require("./movies/movies.router")
const theatersRouter = require("./theaters/theaters.router")
const app = express();


app.use(express.json());
app.use(cors())


app.use("/movies", moviesRouter)
app.use("/theaters", theatersRouter)


app.use(errorHandler)

module.exports = app;
