const modalShowBtn = document.querySelector("#show_modal__btn");
const modalCloseBtn = document.querySelector("#modal_close__btn");
const modalWrapperBtn = document.querySelector(".modal_container");

modalShowBtn.addEventListener("click", () => {
	modalWrapperBtn.style.display = "flex";
});

modalCloseBtn.addEventListener("click", () => {
	modalWrapperBtn.style.display = "none";
});
