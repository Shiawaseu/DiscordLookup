const express = require('express')
const CORS = require('cors')
const app = express()
// routes
const users = require('./routes/user')
const guilds = require('./routes/guild')
const apps = require('./routes/application')
// load routes & middleware

app.use(CORS())

app.use('/user', users)
app.use('/guild', guilds)
app.use('/application', apps)

app.get('/', async (req, res) => {
    res.send('This is the root page, visit /users/{id} or /guilds/{id} to use.')
})

app.get('*', async (req, res) => {
    res.send('Page not found (404), visit /users/{id} or /guilds/{id} to use.')
})
// export
module.exports = app