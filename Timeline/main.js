"use strict";

// Ruta al archivo JSON
const url = "./zelda.json";
// Variable para almacenar los datos
let datos;
// Variable para rastrear si los datos están invertidos o no
let datosInvertidos = false;

// Función principal para obtener los datos y configurar el botón
function getZelda() {
  // Obtener referencia al botón con el id "reversebtn"
  const reverseButton = document.getElementById("reversebtn");
  // Agregar un evento click al botón para invertir el orden
  reverseButton.addEventListener("click", toggleOrden);

  // Realizar una solicitud fetch para obtener los datos del archivo JSON
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Almacenar los datos globalmente
      datos = data;
      // Ordenar los datos inicialmente
      ordenarDatos();
      // Actualizar la línea de tiempo en el DOM
      updateTimeline();
    })
    .catch((err) => console.error(err.message));
}

// Función para ordenar los datos según el estado de inversión
function ordenarDatos() {
  // Utilizar el método sort para ordenar los datos según la fecha, de forma ascendente o descendente
  datos.sort((a, b) => (datosInvertidos ? b.date - a.date : a.date - b.date));
}

// Función para invertir el orden de los datos y actualizar la línea de tiempo
function toggleOrden() {
  // Invertir el estado de datosInvertidos
  datosInvertidos = !datosInvertidos;
  // Llamar a la función para ordenar los datos y actualizar la línea de tiempo
  ordenarDatos();
  updateTimeline();
}

// Función para actualizar la línea de tiempo en el DOM
function updateTimeline() {
  // Obtener referencia al elemento con el id "timeline"
  const timelineElement = document.getElementById("timeline");
  // Limpiar el contenido actual de la línea de tiempo
  timelineElement.innerHTML = "";

  // Iterar sobre cada evento en los datos y crear elementos en el DOM
  datos.forEach((evento) => {
    // Crear contenedor principal de la tarjeta y círculo
    const container = document.createElement("li");
    container.className = "card-container";

    // Crear círculo de la línea de tiempo
    const timelineCircle = document.createElement("div");
    timelineCircle.className = "timeline-circle";

    // Crear tarjeta
    const card = document.createElement("article");
    card.className = "card";

    // Agregar imagen si está presente en el JSON
    if (evento.image) {
      const img = document.createElement("img");
      img.src = evento.image;
      card.appendChild(img);
    }

    // Agregar título, fecha y texto a la tarjeta
    const title = document.createElement("h3");
    title.textContent = evento.title;
    const date = document.createElement("p");
    date.textContent = `Fecha: ${evento.date}`;
    const text = document.createElement("p");
    text.textContent = evento.text;

    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(text);

    // Agregar círculo y tarjeta al contenedor
    container.appendChild(timelineCircle);
    container.appendChild(card);
    // Agregar el contenedor a la línea de tiempo
    timelineElement.appendChild(container);
  });
}

getZelda();
