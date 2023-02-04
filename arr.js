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

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}
