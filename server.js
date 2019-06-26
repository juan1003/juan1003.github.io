const express = require("express")
const app = express()
const path  = require("path")

app.use(express.static('public'))
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(8080, () => {
    console.log("Listening on http://localhost:8080")
})