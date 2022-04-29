let horizontalUnderLine = document.querySelector("#horizontal-underline");
let horizontalMenu = document.querySelectorAll("nav:first-child a");

 
horizontalMenu.forEach(menu => menu.addEventListener("click", (e) => horizontalIndicator(e)))

function horizontalIndicator(e) {
  horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
  horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
  horizontalUnderLine.style.top = 
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";

}