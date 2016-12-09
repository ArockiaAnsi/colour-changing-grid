function mouseOver(element) {
	var randomColor ="#"+ (Math.floor(Math.random()*900000) + 100000);
  	element.style.backgroundColor = randomColor;
	element.style.border = "5px solid black" ;
	element.style.transitionDuration = "1s";
}

function mouseOut(element) {
  	element.style.backgroundColor = "transparent";
	element.style.border = "3px solid black" ;
	element.style.transitionDuration = "2s";
}
