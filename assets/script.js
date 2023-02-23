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
const urlImage = "./assets/images/slideshow/";

let carouselImage = document.querySelector(".banner-img");
let carouselText = document.querySelector("p");
let bullets = document.getElementsByClassName("dot");
let selected = document.querySelector("dot_selected");

function turnRight() {
	bullets[i].classList.remove ("dot_selected"); 
	i++; //incrémentation de 1 du compteur//
	if (
		i >= slides.length) { //si compteur égal au nb d'objets du tableau//
	  	i = 0;     //<-----compteur réinitialisé à 0//
	}
	carouselText.innerHTML = slides[i].tagLine; //changement du texte en fonction de l'indice//
	carouselImage.src = urlImage + slides[i].image; //changement de la source image en fonction de l'indice//
	bullets[i].classList.add ("dot_selected");
};
function turnLeft() {
	bullets[i].classList.remove ("dot_selected"); 
	i --; //décrémentation de 1 du compteur//
	if (
		i < 0) { //si indice compteur inférieur à 0 (atteinte de la première image)//
		i = slides.length -1; //réinitialisation du compteur à la dernière image du tableau//
	} 
	carouselText.innerHTML = slides[i].tagLine;
	carouselImage.src = urlImage + slides[i].image;
	bullets[i].classList.add ("dot_selected");
};
function addBullets() {
	const divDots = document.querySelector(".dots");   
	for (
		let i =0;
		i <slides.length; 
		i++ ) {        //tant que l'indice est inférieur au nb d'éléments du tableau, on ajoute//
		const dot = document.createElement("span");
		dot.classList.add("dot");    //ajout des span de class dot//
		if (
			i === 0
			) {									
			dot.classList.add("dot_selected"); //ajout de la class dot_selected au premier élément du tableau(indice0)//
		}
		divDots.appendChild(dot);     //dans la div de class dots//
	}
};
addBullets();
//CLICK EVENTS//
prev.addEventListener('click', () => {	
	turnLeft(); //appel de la fonction//
});
next.addEventListener('click', () => {
	turnRight();
});

 





