# sv-welovemovies

A project that allowed me to practice connecting a database using Knex
Set up routes using express, and linked the routes to a completed front-end-project

Front End : https://github.com/SVinnik99/starter-movie-front-end
Deployed link of backend : https://we-love-movies-backend-eblc.onrender.com/

Routes:

/movies - lists all movies
/movies?is_showing=true - lists all movies currently showing
/movies/movieID/theaters - lists theaters related to a specific movie by ID
/movies/movieID/reviews - lists reviews related to a specific movie by ID
/reviews/:reviewId   (DELETE/UPDATE) allows you to modify reviews or delte them
/theaters - lists all theaters with added info about the movies 
