const route = require('express').Router()

route.get('/',(req,res) => {
    res.send("Visible to All")
})

exports = module.exports = route