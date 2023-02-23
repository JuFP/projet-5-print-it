let i = 0;
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const prev = document.querySelector(".arrow_left");
const next = document.querySelector(".arrow_right");

let carouselImage = document.querySelector(".banner-img");
let carouselText = document.querySelector("p");
let bullets = document.getElementsByClassName("dot");
let selected = document.querySelector("dot_selected");

function turnRight() {
	i++; //incrémentation de 1 du compteur//
	if (
		i === slides.length) { //si compteur égal au nb d'objets du tableau//
	  	i = 0;     //<-----compteur réinitialisé à 0//
	}
	carouselText.innerHTML = slides[i].tagLine; //changement du texte en fonction de l'indice//
	carouselImage.src = "./assets/images/slideshow/" + slides[i].image; //changement de la source image en fonction de l'indice//
};
function turnLeft() {
	i --; //décrémentation de 1 du compteur//
	if (
		i < 0) { //si indice compteur inférieur à 0 (atteinte de la première image)//
		i = slides.length -1; //réinitialisation du compteur à la dernière image du tableau//
	} 
	carouselText.innerHTML = slides[i].tagLine;
	carouselImage.src ="./assets/images/slideshow/"+slides[i].image;
};



//CLICK EVENTS//
prev.addEventListener('click', () => {	
	turnLeft(); //appel de la fonction//
});
next.addEventListener('click', () => {
	turnRight();
});

 





