const knex = require("../db/connection")


//function that joins the movies table with movies_theaters
//returns the movies that are currently showing in theaters

async function currentlyShowing() {
    return knex("movies as m")
        .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
        .distinct("m.movie_id")
        .select("m.*")
        .where({ "mt.is_showing": true })

}


// function to list all movies

async function list() {

    return knex("movies").select("*");

}

// function to list/read a specific movie

async function read(movieId) {
    return knex("movies")
    .select("*")
    .where({ movie_id: movieId })
    .first()
}

module.exports = {
    list,
    currentlyShowing,
    read
};