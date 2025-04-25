let buttonDark = document.querySelector("#dark");
let buttonLight = document.querySelector("#light");

buttonDark.addEventListener("click", switchDarkMode);
buttonLight.addEventListener("click", switchLightMode);

function switchDarkMode() {
    document.documentElement.classList.add("dark");
}

function switchLightMode() {
    document.documentElement.classList.remove("dark");
}
function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("hidden");
  }