const knex = require("../db/connection")


// Function that joins the movies table with movies_theaters
// Returns the movies that are currently showing in theaters

function currentlyShowing() {
    return knex("movies as m")
        .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
        .distinct("m.movie_id")
        .select("m.*")
        .where({ "mt.is_showing": true })

}


// List all movies

function list() {

    return knex("movies").select("*");

}

// Read a specific movie

function read(movieId) {
    return knex("movies")
        .select("*")
        .where({ movie_id: movieId })
        .first()
}


function listTheatersForMovie(movieId) {
    return knex("theaters as t")
        .join("movies_theaters as mt", "mt.theater_id", "t.theater_id")
        .where({ "mt.movie_id": movieId, "mt.is_showing": true })
        .select("t.*")
}



module.exports = {
    list,
    currentlyShowing,
    read,
    listTheatersForMovie
};