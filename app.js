const boardNode = document.querySelector("#board");
const colors = [
	"	#FF0000",
	"	#FF8000",
	"	#FFFF00",
	"	#80FF00",
	"	#00FF00",
	"	#00FF80",
	"	#00FFFF",
	"	#0080FF",
	"	#0000FF",
	"	#8000FF",
	"	#FF00FF",
	"	#FF0080",
];
const SQUARES_QUANTITY = 500;

for (let i = 0; i < SQUARES_QUANTITY; i++) {
	const squareNode = document.createElement("div");
	squareNode.classList.add("square");

	squareNode.addEventListener("mouseover", () => setColor(squareNode));

	squareNode.addEventListener("mouseleave", () => removeColor(squareNode));

	boardNode.append(squareNode);
}

function setColor(element) {
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	element.style.backgroundColor = "#1d1d1d";
	element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}
