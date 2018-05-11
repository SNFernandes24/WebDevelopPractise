const express = require("express");
const app = express();
const request = require('request');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

let results;
let title = [];

app.get("/", function(req, res) {
    res.render('home', {title: title});
});

app.post("/search", (req, res) => {
    let getList = req.body.SearchText;
    getList = removeSpace(getList);

    request(`http://omdbapi.com/?s=${getList}&apiKey=thewdb`, function(err, response, body) {
        if(!err && response.statusCode == 200) {
            results = JSON.parse(body);
            results = results["Search"];
            res.redirect("/display");
        }
    }); 
});

app.get("/display", (req, res)=> {
    res.render('display', {results: results});
});

app.post("/addFav", (req, res) => {
    let fav = req.body.Fav;
    request(`http://omdbapi.com/?i=${fav}&apiKey=thewdb`, (err, response, body) => {
            if(!err && response.statusCode == 200) {
            results = JSON.parse(body);
            title.push(results["Title"]);
            res.redirect("/");
        }
    });
});

function removeSpace(str){
    return str.replace(/\s/g, "%20");
}

app.listen(8000, () => {
    console.log(`started server on 8000`);
});