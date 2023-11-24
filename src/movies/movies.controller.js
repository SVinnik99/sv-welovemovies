const service = require("./movies.service")


// validation functions

async function movieExists(req,res,next) {
    
    const movie = await service.read(req.params.movieId)

    if (movie) {
        res.locals.movie = movie
        return next();
    }
    next({ status: 404, message: "Movie cannot be found." })
}



//functions that takes the movies data, and returns based on the route
// GET /movies returns all movies
// GET /movies?is_showing=true returns only movies that are currently showing in theaters

async function list(req, res) {

    const allMovies = await service.list();
    const currentlyShowing = await service.currentlyShowing();
    const isShowing = req.query.is_showing;

    const data = isShowing ? currentlyShowing : allMovies;

    res.json({ data });

}

//function to read a specific movie by ID
async function read(req, res, next) {

    const data = res.locals.movie;

    res.json({data:data})

}



module.exports = { list, read:[movieExists,read] };