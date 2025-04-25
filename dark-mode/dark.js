let buttonDark = document.querySelector("#dark");

buttonDark.addEventListener("click", switchDarkMode);

function switchDarkMode() {
    document.documentElement.classList.toggle("dark");
}
