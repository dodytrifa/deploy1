const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require("./routes/index.js")

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use('/', routes)

app.listen(PORT, function () {
    console.log('running on port', PORT);
})