const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "Rojo",
    kilometraje: 15000,
    combustible: "Híbrido",
    transmisión: "Automática",
    precio: 25000,
    dueñosAnteriores: ["Juan Pérez", "Ana Gómez"],
    especificaciones: {
      motor: {
        tipo: "4 cilindros",
        potencia: "140 HP",
        torque: "190 Nm",
      },
      seguridad: {
        airbags: 8,
        frenosABS: true,
        controlEstabilidad: true,
      },
      dimensiones: {
        largo: "4.63 m",
        ancho: "1.78 m",
        altura: "1.45 m",
      },
    },
    opciones: ["Asientos de cuero", "Pantalla táctil", "Cámara de reversa"],
    historialMantenimiento: [
      { fecha: "10/03/2023", servicio: "Cambio de aceite", costo: 120 },
      { fecha: "15/07/2023", servicio: "Rotación de llantas", costo: 50 },
    ],
    calcularDepreciacion: function (añoActual) {
      return this.precio * 0.9 ** (añoActual - this.año);
    },
  };

  const contenedor = document.getElementById("contenido");

  function crearTabla(titulo, datos) {
    const tabla = document.createElement("table");
    const caption = document.createElement("caption");
    caption.textContent = titulo;
    tabla.appendChild(caption);

    for (const clave in datos) {
      const fila = document.createElement("tr");
      const th = document.createElement("th");
      th.textContent = clave;
      const td = document.createElement("td");
      td.textContent = datos[clave];
      fila.appendChild(th);
      fila.appendChild(td);
      tabla.appendChild(fila);
    }

    contenedor.appendChild(tabla);
  }

  crearTabla("Datos del Auto", {
    Marca: auto.marca,
    Modelo: auto.modelo,
    Año: auto.año,
    Color: auto.color,
    Kilometraje: auto.kilometraje + " km",
    Combustible: auto.combustible,
    Transmisión: auto.transmisión,
    Precio: "$" + auto.precio,
  });

  crearTabla("Motor", auto.especificaciones.motor);
  crearTabla("Seguridad", {
    Airbags: auto.especificaciones.seguridad.airbags,
    "Frenos ABS": auto.especificaciones.seguridad.frenosABS ? "Sí" : "No",
    "Control Estabilidad": auto.especificaciones.seguridad.controlEstabilidad ? "Sí" : "No"
  });
  crearTabla("Dimensiones", auto.especificaciones.dimensiones);

  function crearLista(titulo, lista) {
    const tabla = document.createElement("table");
    const caption = document.createElement("caption");
    caption.textContent = titulo;
    tabla.appendChild(caption);

    lista.forEach((item, i) => {
      const fila = document.createElement("tr");
      const th = document.createElement("th");
      th.textContent = "#" + (i + 1);
      const td = document.createElement("td");
      td.textContent = item;
      fila.appendChild(th);
      fila.appendChild(td);
      tabla.appendChild(fila);
    });

    contenedor.appendChild(tabla);
  }

  crearLista("Dueños Anteriores", auto.dueñosAnteriores);
  crearLista("Opciones", auto.opciones);

  function crearHistorial(titulo, historial) {
    const tabla = document.createElement("table");
    const caption = document.createElement("caption");
    caption.textContent = titulo;
    tabla.appendChild(caption);

    const encabezado = document.createElement("tr");
    ["Fecha", "Servicio", "Costo"].forEach(col => {
      const th = document.createElement("th");
      th.textContent = col;
      encabezado.appendChild(th);
    });
    tabla.appendChild(encabezado);

    historial.forEach(registro => {
      const fila = document.createElement("tr");
      const tdFecha = document.createElement("td");
      tdFecha.textContent = registro.fecha;
      const tdServicio = document.createElement("td");
      tdServicio.textContent = registro.servicio;
      const tdCosto = document.createElement("td");
      tdCosto.textContent = "$" + registro.costo;
      fila.appendChild(tdFecha);
      fila.appendChild(tdServicio);
      fila.appendChild(tdCosto);
      tabla.appendChild(fila);
    });

    contenedor.appendChild(tabla);
  }

  crearHistorial("Historial de Mantenimiento", auto.historialMantenimiento);