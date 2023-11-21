const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties")



async function list() {
  return knex("theaters as t")
  .join("movies_theaters as mt","t.theater_id","mt.theater_id")
  .join("movies as m","m.movie_id","mt.movie_id")
  .select("t.*","m.*","mt.*")
  
}

module.exports = { list };
