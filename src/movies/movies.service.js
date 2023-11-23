const knex = require("../db/connection")


async function currentlyShowing() {
   return knex("movies as m")
        .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
        .distinct("m.movie_id")
        .select("m.*")
        .where({ "mt.is_showing": true })
        

}

async function list() {

    return knex("movies").select("*");

}





module.exports = { list, currentlyShowing };