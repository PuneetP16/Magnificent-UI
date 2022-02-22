const hamburgerBtn = document.querySelector(".hamburger_icon");

hamburgerBtn.addEventListener("click", () => {
	document.querySelector("body").classList.toggle("show");
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
