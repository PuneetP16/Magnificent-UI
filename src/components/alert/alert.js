const alertWarningDismissEl = document.querySelector("#alert--warning--dismiss");

const alertWarningDismissBtn = document.querySelector("#alert--warning--dismiss-btn");


const alertWarningDismissBtnFunc = () => {
    console.log("clicked")
    alertWarningDismissEl.style.display = "none";
}

alertWarningDismissBtn.addEventListener("click", alertWarningDismissBtnFunc);