const express = require('express')
const mongoose = require('mongoose')
const currentDB = require('./config/db')


const authRoute = require('./routes/auth')

mongoose.connect(currentDB)
const db = mongoose.connection

const port = process.env.PORT || 5003

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database connection established')
})

const app = express()

// const register = (req, res, next) => {
//     bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
//         if(err) {
//             res.json({ error: err })
//         }

//         let user = new User({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.hashedPass
//         })
//         user.save()
//         .then(user => {
//             res.json({ message: 'User added successfully!' })
//         })
//         .catch(error => {
//             res.json({ message: 'An error occurred' })
//         })
//     })


// }

// app.post('/api/register', register)


app.listen(port, () => console.log(`App listening on port ${port}`))

app.use('/api', authRoute)