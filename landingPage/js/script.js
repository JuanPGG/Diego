// Variables
const nav__menu = document.querySelector(".nav__menu");
const nav__line = document.querySelectorAll(".nav__line");
const nav__ul = document.querySelector(".nav__ul");
const nav__li = document.querySelectorAll(".nav__li");
const nav__li_span = document.querySelectorAll(".nav__li-span");

const seccion1 = document.querySelector(".main__seccion1").offsetTop;
const seccion1_p = document.querySelector(".main__seccion1-p");
const seccion1_img = document.querySelector(".main__seccion1-img");

const main__carrusel = document.querySelector(".main__carrusel").offsetTop;
const seccion__carrusel = document.querySelector(".carrusel");

const seccion2 = document.querySelector(".main__seccion2").offsetTop;
const seccion2_1 = document.querySelector(".main__1");
const seccion2_2 = document.querySelector(".main__2");

const seccion3 = document.querySelector(".main__seccion3").offsetTop;

const carrusel__contain = document.querySelectorAll(".carrusel__contain");
const carrusel__buttonLeft = document.querySelector(".carrusel__button-left");
const carrusel__buttonRight = document.querySelector(".carrusel__button-right");
let contadorCarrusel = 0;

// Funciones

const carrusel = (valor) => {
	for(let i = 0; i < carrusel__contain.length; i++){
		if(carrusel__contain[i].classList.contains('carrusel__contain--show')){
			carrusel__contain[i].classList.remove('carrusel__contain--show');
		}
	}
	if(valor < 0){
		contadorCarrusel = carrusel__contain.length - 1;
		carrusel__contain[contadorCarrusel].classList.toggle('carrusel__contain--show');
	}else if(valor === carrusel__contain.length){
		contadorCarrusel = 0;
		carrusel__contain[contadorCarrusel].classList.toggle('carrusel__contain--show');
	}else{
		carrusel__contain[valor].classList.toggle('carrusel__contain--show');
	}
}

const pageScroll = () => {
	let desp = window.pageYOffset;
	let distancia = 300;

	navScroll(desp, distancia);
	// Seccion 1
	if(desp >= (seccion1 - distancia)){
		seccion1_p.classList.add('main__seccion--move');
		seccion1_img.classList.add('main__seccion--move');
	}

	// Seccion carrusel
	if(desp >= (main__carrusel - distancia)){
		seccion__carrusel.classList.add('main__seccion--move');
	}

	// Seccion 2
	if(desp >= (seccion2 - distancia)){
		seccion2_1.classList.add('main__seccion--move');
		seccion2_2.classList.add('main__seccion--move');
	}
}

const navScroll = (desp, distancia) => {
	for(let i = 0; i < nav__li_span.length; i++){
		nav__li_span[i].classList.remove('nav__li-span--scroll');
	}
	if(desp >= 0 && desp < (seccion1 - distancia)){
		nav__li_span[0].classList.add('nav__li-span--scroll');
	}else if(desp <= (main__carrusel - distancia) && desp >= (seccion1 - distancia)){
		nav__li_span[1].classList.add('nav__li-span--scroll');
	}else if(desp >= (main__carrusel - distancia) && desp <= (seccion2 - distancia)){
		nav__li_span[2].classList.add('nav__li-span--scroll');
	}else if(desp <= (seccion3 - distancia) && desp >= (seccion2 - distancia)){
		nav__li_span[3].classList.add('nav__li-span--scroll');
	}
}







// Eventos 

nav__menu.addEventListener("click", () => {
	nav__ul.classList.toggle('nav__ul--open');
	for(let i = 0; i < nav__line.length; i++){
		nav__line[i].classList.toggle('nav__line--open');
	}
	for(let i = 0; i < nav__li.length; i++){
		nav__li[i].classList.toggle('nav__li--open');
	}
});

carrusel__buttonLeft.addEventListener("click", () => {
	contadorCarrusel--;
	carrusel(contadorCarrusel);
});

carrusel__buttonRight.addEventListener("click", () => {
	contadorCarrusel++;
	carrusel(contadorCarrusel);
});


window.addEventListener('scroll', function(){
	pageScroll();
	// var wintop = window.pageYOffset;
	// var docheight = document.body.scrollHeight;
	// var winheight = window.innerHeight;
	// var lineaScrol = (wintop / (docheight - winheight)) * 100;
	// document.getElementById('lineaScrol').style.width = lineaScrol + '%';
});