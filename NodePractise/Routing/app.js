const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"), bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

let friends = ["A", "B", "C"];

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/speak/:animal", function(req, res) {
    let sounds = {
        dog: "Woof Woof!",
        cat: "Meow!",
        pig: "Oink!",
        cow: "Moo!"
    }
    let animal = req.params.animal.toLowerCase();
    let speak = sounds[animal];

    res.send(`The ${animal} says "${speak}"`);
});

app.get("/repeat/:Word/:Number", function(req, res) {
    let word = req.params.Word;
    let number = req.params.Number
    let tString = "";

    for(let i = 0; i < number; i++)
    {
        tString += `${word} `;
    }
    res.send(tString);
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});

app.post("/addFriend", function(req, res) {
     let newFriend = req.body.newFriend;
     friends.push(newFriend);
     res.redirect("/friends");
});

app.get("*", function(req, res) {
    res.send("Page Not Found!");
});

app.listen(3000, function() {
    console.log(`server running on 3000`);
});