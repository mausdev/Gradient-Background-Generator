var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


// function to get random numbers for the rgb color
function getRandomRgb() {
	var num = Math.round(0xffffff * Math.random());
	var r = num >> 16;
	var g = num >> 8 & 255;
	var b = num & 255;
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
 

// function to set the randomize rgb color to the css variable
function setRandomizer() {
	body.style.background = "linear-gradient(to right, " + getRandomRgb() + ", " + getRandomRgb() + ")";

	css.textContent = body.style.background + ";";

}


window.onload = setGradient;


// auto copy when the css gradient code is clicked 
// since h3 cannot be used for document.execCommand, an alternative is used by using a hidden input tag
document.querySelector("#inputText").addEventListener("click", function(){
	var copyh3 = document.getElementById("codeinput");

	var hiddenField = document.getElementById("copyCode");
	hiddenField.value = copyh3.innerHTML;
	hiddenField.select();
	document.execCommand("copy");

	alert("copied the code: " + hiddenField.value);
}, false);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomizer);

