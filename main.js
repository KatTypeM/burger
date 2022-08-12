
// burger javascript 
const containerBurger = document.querySelector(".container-burger");
const containerBurgerRotate = document.querySelector(".container-burger-rotate");


containerBurger.addEventListener("click", function(){
	containerBurgerRotate.classList.toggle("burger-rotate");
	setTimeout(() => {
		containerBurgerRotate.classList.toggle("toggle-x");
		containerBurgerRotate.classList.toggle("toggle-color");
	}, 500);
});



