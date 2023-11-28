const router = require("express").Router({ mergeParams: true })
const controller = require("./reviews.controller")



// PUT/DELETE (/reviews/:reviewId)

router.route("/:reviewId")
    .put(controller.update)  // Route for updating a review
    .delete(controller.delete) // Route for deleting a review 


module.exports = router;