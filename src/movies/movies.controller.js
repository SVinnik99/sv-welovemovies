const service = require("./movies.service")



async function list(req, res) {
    const data = await service.list();

    console.log(data)

    res.json({ data });
}


module.exports = { list };