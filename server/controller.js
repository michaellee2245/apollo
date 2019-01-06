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
    db.search_user([req.body.loginUsername])
        .then(user => {
            if (!user[0]) {
                return res.status(401).send("User doesn't exist.")

            }

            bcrypt.compare(req.body.loginPassword, user[0].password, function (err, isCorrectPassword) {
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
        console.log('controller error', error)
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
function deleteComment(req,res){
    const db = req.app.get('db')
    const { params } = req 
    console.log(req.params, "*******inside controller")
    db.delete_comment([params.id])
    .then(() => {
        res.status(200).send('Comment Deleted')
    })
    .catch((error) => {
        console.log(error)
        res.status(500).send(error)
    })
}   
function updateComment(req,res){
    const db = req.app.get('db');
    const { user_name, mission, user_comment, user_id } = req.body;
    const id = req.params.id
    console.log("update comment" ,req.body, req.params.id)
    db.update_comment([user_name, mission, user_comment, Number(id)])
    .then(() => {
        res.status(200).send('Comment Updated')
    })
    .catch((error) => {
        console.log(error)
        res.status(500).send(error)
    })
}

function getComment(req,res){
    const db = req.app.get('db')
    const id = req.params.id

    db.get_comment(id)
    .then((comment) => {
        
        res.status(200).send(comment)
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
    leaveComment,
    deleteComment,
    updateComment,
    getComment
}