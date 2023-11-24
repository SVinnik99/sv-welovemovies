const router = require("express").Router({ mergeParams: true })
const controller = require("./movies.controller")


//route for /movies
router.route("/")
    .get(controller.list)

//route for /movies/:movieId

router.route("/:movieId")
    .get(controller.read)


module.exports = router;