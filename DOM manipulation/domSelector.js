var first = document.querySelector("p");
var second = document.querySelector("#first");
var third = document.querySelector(".special");
var fourth = document.getElementById("first");
var fifth = document.getElementsByClassName("special")[0];
var sixth = document.getElementsByTagName("p")[0];

first.classList.add("colorChange");
first.classList.toggle("colorChange");
first.classList.remove("colorChange");

first.textContent = "This just changes text no html tags";
first.innerHTML = "this <strong>can</strong> change html with tags";

document.querySelector("h1").textContent = "Direct change of text without vars";

var imgLink = document.querySelector("img").getAttribute("src");

console.log(imgLink);

document.querySelector("img").setAttribute("src", "https://pbs.twimg.com/profile_images/888907252702347265/g2JwwLDR_400x400.jpg")