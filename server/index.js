require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const controller = require('./controller.js');
const bcrypt = require('bcrypt-nodejs');
const session = require('express-session');

const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;



massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log('Database is connected')
    })
    .catch((error) => console.error('Database connection error', error))

app.use(cors());
app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false
}))
app.use((req, res, next) => {
    console.log("Session")
    console.log(req.session)
    next()
})
app.listen(SERVER_PORT, () => {
    console.log(`Server connected and running on port ${SERVER_PORT}`);
})

app.post('/api/new_user', (req, res) => {
    const db = req.app.get('db')
    const { username, email, password } = req.body

    bcrypt.hash(password, null, null, (err, hash) => {
        if (err) {
            return res.send('An error occurred while hashing.')
        }
        db.register_user([username, email, hash])
            .then(() => {
                res.status(200).send('User created successfully.')
            })
            .catch((error) => {
                res.status(500).send(error)
            })
    })

})

app.post('/api/login', controller.loginUser)
app.get('/api/missions', controller.missionTile)
app.get('/api/comments', controller.getComments)
app.get('/api/logout', controller.logoutUser)
app.post('/api/leave-comment', controller.leaveComment)
app.delete('/api/delete-comment/:id', controller.deleteComment)
app.put('/api/update-comment/:id', controller.updateComment)
app.get('/api/comment/:id', controller.getComment)

const path = require('path')
app.get('*', (req, res)=>{
res.sendFile(path.join(__dirname, '..','build','index.html'));
})