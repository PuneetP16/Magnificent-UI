// Hamburger icon element
const hamburgerBtn = document.querySelector(".hamburger_icon");

// function for Mobile Navigation menu
hamburgerBtn.addEventListener("click", () => {
	document.querySelector("body").classList.toggle("show");
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
