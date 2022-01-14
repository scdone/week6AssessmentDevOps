const bots = require('./data')

module.exports = {
    getAllBotsBack: (req, res) => {
        res.status(200).send(bots.data)
    }
}