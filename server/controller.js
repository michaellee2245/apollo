function missionTile (req, res) {
    const db = req.app.get('db')

    db.mission_tile_info()
    .then((mission_tile) => {
        res.send(mission_tile)
    })
}

const bcrypt = require('bcrypt-nodejs');

function loginUser(req, res) {
    const db = req.app.get('db')
    // const { username, password } = req.body
    console.log(req.body)
    db.search_user([req.body.username])
        .then(user => {
            if (!user[0]) {
                return res.status(401).send("User doesn't exist.")

            }

            bcrypt.compare(req.body.password, user[0].password, function (err, isCorrectPassword) {
                if (err) {
                    return res.status(500).send(err)
                }
                if (isCorrectPassword) {
                    req.session.user = user[0]
                    res.status(200).send(user[0])
                }
                else {
                    res.status(401).send('Username or password incorrect')
                }
            });
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send(error)
        })
}
function logoutUser(req,res){
    req.session.destroy()
    res.status(200).send("User Logged Out")
}
function getComments(req, res){
    const db = req.app.get('db')
    db.get_comments()
    .then((comments) => {
        res.status(200).send(comments)
    })
    .catch((error) => {
        console.log(error)
        res.status(500).send(error)
    })
}
function leaveComment(req,res){
    console.log(req.session)
    const db = req.app.get('db')
    const { user_name, mission, user_comment, users_id } = req.body
    // const { id } = req.session.user || {}
    db.leave_comment({ user_name, mission, user_comment, users_id})
    .then(() => {
        res.status(200).send('Comment Added')
    })
    .catch((error) => {
        console.log(error)
        res.status(500).send(error)
    })
}
// function deleteComment(req,res){
//     const db = req.app.get('db')
//     db.delete_comment()
// }
module.exports = {
    missionTile,
    loginUser,
    getComments,
    logoutUser,
    leaveComment
}