alert("Bienvenido perro");

let edad = prompt("Por favor, ingresa tu edad:");

edad = parseInt(edad);

if (isNaN(edad)) {
  alert("Por favor, ingresa un número válido.");
} else {
 
    if (edad >= 18) {
    alert("¡Puedes votar!");
  } else {
    alert("Lo siento, debes tener al menos 18 años para votar.");
  }
}