var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var allLists = document.querySelectorAll("li");

allLists.forEach(function(val) {
	toggleDone(val);
});

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	toggleDone(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(li) {
	li.addEventListener("click", function () {
		li.classList.toggle("done");
	});

	createDelBtn(li);
}

function createDelBtn(li) {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	li.appendChild(btn);
	btn.classList.add("padRight");

	btn.addEventListener("click", function(){
		btn.parentElement.remove();
	} );
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);




