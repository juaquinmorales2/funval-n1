// let numero = prompt("Ingresa un número del 1 al 10 para ver su tabla de multiplicar:");

// numero = parseInt(numero);

// if (isNaN(numero) || numero < 1 || numero > 10) {
//   alert("Por favor, ingresa un número válido entre 1 y 10.");
// } else {

//   let resultado = "Tabla del " + numero + ":\n";
//   for (let i = 1; i <= 10; i++) {
//     resultado += `${numero} x ${i} = ${numero * i}\n`;
//   }
//   alert(resultado);
// } 




//  function calcularArea() {
//    const opcion = prompt(
//      "Elige una figura para calcular su área:\n1 - Cuadrado\n2 - Círculo\n3 - Rectángulo\n4 - Triángulo"
//    );
//    let area;
//    switch (opcion) {
//      case "1": {
//        const lado = parseFloat(prompt("Ingresa el lado del cuadrado:"));
//        area = lado * lado;
//        alert(`El área del cuadrado es: ${area}`);
//        break;
//      }
//      case "2": {
//        const radio = parseFloat(prompt("Ingresa el radio del círculo:"));
//        area = Math.PI * radio * radio;
//        alert(`El área del círculo es: ${area.toFixed(2)}`);
//        break;
//      }
//      case "3": {
//        const base = parseFloat(prompt("Ingresa la base del rectángulo:"));
//        const altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));
//        area = base * altura;
//        alert(`El área del rectángulo es: ${area}`);
//        break;
//      }
//      case "4": {
//        const base = parseFloat(prompt("Ingresa la base del triángulo:"));
//        const altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
//        area = (base * altura) / 2;
//        alert(`El área del triángulo es: ${area}`);
//        break;
//      }
//      default:
//        alert("Ponelo Bieeeeeen");
//    }
//  }
//  calcularArea();




// let numerodup = numero  * 2;
// numero = [1,2,3,4];
// console.log(numero);

// const productos = [
//     { nombre: "Laptop", precio: 1200 },
//     { nombre: "Mouse", precio: 25 },
//     { nombre: "Teclado", precio: 50 },
//     { nombre: "Monitor", precio: 300 },
//     { nombre: "Silla Gamer", precio: 450 },
//     { nombre: "Audífonos", precio: 80 },
//     { nombre: "Webcam", precio: 60 },
//     { nombre: "USB 128GB", precio: 30 },
//     { nombre: "Impresora", precio: 200 },
//     { nombre: "Tablet", precio: 500 }
//  ];

//  console.log(productos);

//  const productosDisponibles = productos.map(producto => producto.nombre);
// console.log("Productos disponibles:", productosDisponibles);

// productosDisponibles.includes("Laptop") ? console.log("Laptop está disponible") : console.log("Laptop no está disponible");

// const productosFiltrados = productos.filter(producto => producto.precio < 100);
// console.log("Productos filtrados (precio < 100):", productosFiltrados.map(producto => producto.nombre));

// const primerosDos = productos.slice(0, 2);
// console.log("Los primeros 2 productos son:", primerosDos);

// const productosOrdenados = productos.sort((a, b) => a.precio - b.precio);
// console.log("Productos ordenados por precio (menor a mayor):", productosOrdenados);

// const productosInvertidos = productos.reverse();
// console.log("Productos en orden inverso:", productosInvertidos);



// let objs = [
//     { nombre: "Daniel", edad: 24 },
//     { nombre: "Miguel", edad: 22 },
//     { nombre: "Gustavo", edad: 23 },
//     { nombre: "Domingo", edad: 20 },
//   ];
  
//   let edades = objs.map(obj => obj.edad);
  
//   console.log(edades);
  

