for(var i = 0; i < 7000; i++) {
	document.querySelector(".container").innerHTML += "<div class='box'></div>";
}

var arrayOfBoxes = document.querySelectorAll(".box");

for (var i = 0; i < arrayOfBoxes.length; i++) {
	if(i % 2 === 0) {
		arrayOfBoxes[i].style.background = "black";
	}
}
