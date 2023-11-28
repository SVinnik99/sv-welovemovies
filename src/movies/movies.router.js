const router = require("express").Router({ mergeParams: true })
const theatersRouter = require("../theaters/theaters.router")
const controller = require("./movies.controller")


//route for all movies (/movies)
router.route("/")
    .get(controller.list)

//route for a specific movie (/movies/:movieId)

router.route("/:movieId")
    .get(controller.read)

// route for theaters displaying a certain movie ID (/movies/:movieId/theaters)

router.route("/:movieId/theaters")
    .get(controller.theaters)


module.exports = router;