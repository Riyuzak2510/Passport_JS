const route = require('express').Router()

route.get('/',(req,res) => {
    res.send("Visible to only Logged in Users")
})

exports = module.exports = route