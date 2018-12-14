function missionTile (req, res) {
    const db = req.app.get('db')

    db.mission_tile_info()
    .then((mission_tile) => {
        res.send(mission_tile)
    })
}

module.exports = {
    missionTile
}