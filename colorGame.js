// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ]
var numSquares = 6
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay")
var colorPicked = pickColor();
colorDisplay.textContent = colorPicked;
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var reset = document.querySelector("#reset")
var easy = document.querySelector("#easy")
var hard = document.querySelector("#hard")


easy.addEventListener("click",function(){
	hard.classList.remove("selected");
	easy.classList.add("selected")
	colors = generateRandomColors(3);
	// for (var i = 0; i < 3; i++) {
	// 	squares[i].style.background = colors[i]
	// }
	// for (var i = 3; i < 6; i++) {
	// 	squares[i].style.background = "#232323"
	// }
	numSquares = 3
	colors = generateRandomColors(numSquares)
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked
	for (var i = 0; i < squares.length; i++) {
		if(colors[i])
			squares[i].style.backgroundColor = colors[i]
		else
			squares[i].style.backgroundColor = "#232323"
	}
})

hard.addEventListener("click", function(){
	easy.classList.remove("selected")
	hard.classList.add("selected")
	numSquares = 6
	colors = generateRandomColors(6)
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i]
	}

})

reset.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked
	messageDisplay.textContent = ""
	reset.textContent = "New Colors"
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i]
	}
	h1.style.background = "steelblue";
})
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i]

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor
		if(clickedColor==colorPicked){
			messageDisplay.textContent = "correct!"
			reset.textContent = "Play Again?"
			changeColors(clickedColor)
			h1.style.background = clickedColor
		}
		else{
			//alert("wrong")
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "try again"
		}
	})
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
				squares[i].style.backgroundColor = color
			}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function generateRandomColors(num){
	//make an array, call random colors function, put it in array then return the array
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr
}

function randomColor(){
	//get a random number between 0 and 255
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)

	//put it in rgb(r, g, b) format

	return "rgb(" + r +", " + g +", " + b +")";

}


