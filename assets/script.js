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
const selected = document.getElementsByClassName("dot_selected");

let carousel = document.getElementById("banner");
let carouselImage = document.getElementsByClassName("banner-img");
let carouselText = document.querySelector(".banner-p");

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
addBullets(); // exécution du html dynamique des bullets points//

function addText() {
	carouselText.innerHTML = "Impressions tous formats <span>en boutique et en ligne</span>";
}
addText(); //exécution du html dynamique du texte//

//CLICK EVENTS//
prev.addEventListener('click', () => {	
		
});
next.addEventListener('click', () => {
	selected[0].classList.remove("dot_selected");
	selected[1].classList.add("dot_selected");
	
});







