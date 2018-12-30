const express = require('express')
const session = require('express-session')
const passport = require('./passport')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: 'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())

app.set('view engine','hbs')

app.use('/public',require('./routes/public.js'))
app.use('/private',require('./routes/private.js'))
app.use('/',require('./routes/root'))

app.listen(9876,() => console.log("Server connected at http://localhost:9876"))