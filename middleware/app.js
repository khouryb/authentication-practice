const express = require('express')

const app = express()

app.use(middleware1)
app.use(middleware2)


function middleware1 (req, res, next) {
    req.customProperty = 100;
    console.log('Custom property value is:', req.customProperty)
    next()
}

function middleware2 (req, res, next)
 {
    console.log('Now the custom property value is: ', req.customProperty * 2)
    req.customProperty = 600
    next()
 }

 function middleware3 (req, res, next)
 {
    console.log('I am middleware 3')
    next()
 }

app.get('/', middleware3, (req, res) => {
    console.log("I am a normal express callback function")
    res.json({ message: "hi" })
})

app.listen(5004)