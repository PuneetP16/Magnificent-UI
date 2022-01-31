
const toggleBadgeVisibility = () => {
    let badgeElement = document.getElementById("badgetoggle1")
    if (badgeElement.style.display === "none") {
        badgeElement.style.display = "flex";
      } else {
        badgeElement.style.display = "none";
      }
}


