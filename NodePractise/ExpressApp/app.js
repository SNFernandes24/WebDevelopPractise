const express = require("express");
const app = express();

app.get("/", function(request, response) {
    response.send("Hi There.");
});

app.get("/bye", function(req, res) {
    res.send("Bye");
});

app.get("/:dog", function(req, res) {
    res.send("Doggo");
});

//express listen

app.listen(3000, function() {
    console.log("Server running on 3000");
});