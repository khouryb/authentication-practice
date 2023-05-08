const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    // bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
    //     if(err) {
    //         res.json({ error: err })
    //     }

        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        user.save()
        .then(user => {
            res.json({ message: 'User added successfully!' })
        })
        .catch(error => {
            res.json({ message: 'An error occurred' })
        })
    // })


}

module.exports = { register }