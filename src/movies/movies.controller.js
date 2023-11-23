const service = require("./movies.service")


async function list(req, res) {

    const allMovies = await service.list();
    const currentlyShowing = await service.currentlyShowing()
    const isShowing = req.query.is_showing;

    const data = isShowing ? currentlyShowing : allMovies

    res.json({ data })


}


module.exports = { list };