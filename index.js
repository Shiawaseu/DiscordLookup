const app = require('./server/app')
const settings = require('./config.json')

app.listen(settings.port, () => {
    console.log(`[!] Server started in port ${settings.port}`)
})