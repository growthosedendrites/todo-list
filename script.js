var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.createElement("li");



function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var buttonDelete = document.createElement("button");
	var buttonComplete = document.createElement("button");
	buttonDelete.classList.add("begone");
	buttonDelete.textContent = "Remove";
	buttonComplete.classList.add("complete");
	buttonComplete.textContent = "Victory!";
	li.appendChild(buttonDelete);
	li.appendChild(buttonComplete);
	ul.appendChild(li);
	input.value = "";

	ul.appendChild(li);
	li.classList.add("begone");
	li.classList.add("complete");
    input.value = "";
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


function toggleDone(event) {
    if (event.target.classList.contains("complete")) {
        event.target.closest("li").classList.toggle("done");
    }
}



function removeListItem(event) {
	if(event.target.classList.contains("begone")) {
		event.target.closest("li").remove();
	}

}


ul.addEventListener("click", toggleDone);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", removeListItem); 


 
