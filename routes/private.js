const route = require('express').Router()

route.get('/',(req,res) => {
    if(req.user) {
        return res.send("Visible to only Logged in Users")
    } else {
        res.redirect('/login')
    }
})

exports = module.exports = route