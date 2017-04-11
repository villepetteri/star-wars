const express = require("express")
const app = express()

app.use(express.static(__dirname + "/bower_components"))
app.use(express.static(__dirname + "/assets"))
app.use(express.static(__dirname + "/components"))

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html")
})

const PORT = 8080
app.listen(PORT, function() {
	console.log("App running at http://localhost:" + PORT)
})
