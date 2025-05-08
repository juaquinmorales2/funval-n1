const boton = document.getElementById("cambiarBtn");
const imagen = document.getElementById("imagen");

let esDia = true;

boton.addEventListener("click", () => {
  if (esDia) {
    imagen.src = "./ogra.jpg";
    imagen.alt = "Modo Noche";
    boton.textContent = "Cambiar a Día";
  } else {
    imagen.src = "./fiona.jpg";
    imagen.alt = "Modo Día";
    boton.textContent = "Cambiar a Noche";
  }
  esDia = !esDia;
});

//Otra cosa

function mostrarContenido() {
    document.getElementById("mensaje").style.display = "block";
    document.getElementById("nuevaImagen").style.display = "block";
  }

let formulario = document.querySelector("#nombre");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let megaformularioxd = new FormData(formulario);
    console.log(megaformularioxd.get("nombredeusuario"));
    if (megaformularioxd.get("nombredeusuario") === "") {
        alert("Por favor, introduce un nombre de usuario.");
    } 
    if (megaformularioxd.get("edad") < 18) {
        alert("Por favor, eres ilegal.");
    }
    if (megaformularioxd.get("nacionalid") !== "Chile") {
        alert("Por favor, no sos Chileno.");
    }
});

