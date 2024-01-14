"use strict";

const url = "./zelda.json";
let datos;
let datosInvertidos = false;

function getZelda() {
  const reverseButton = document.getElementById("reversebtn");

  reverseButton.addEventListener("click", toggleOrden);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error de red - ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      datos = data;
      ordenarDatos();
      updateTimeline();
    })
    .catch((err) => console.error(`Error al obtener datos: ${err.message}`));
}

function ordenarDatos() {
  datos.sort((a, b) => (datosInvertidos ? b.date - a.date : a.date - b.date));
}

function toggleOrden() {
  datosInvertidos = !datosInvertidos;
  ordenarDatos();
  updateTimeline();
}

function updateTimeline() {
  const timelineElement = document.getElementById("timeline");
  timelineElement.innerHTML = "";

  datos.forEach((evento) => {
    const container = document.createElement("li");
    container.className = "card-container";

    const timelineCircle = document.createElement("div");
    timelineCircle.className = "timeline-circle";

    const card = document.createElement("article");
    card.className = "card";

    if (evento.image) {
      const img = document.createElement("img");
      img.src = evento.image;
      card.appendChild(img);
    }

    const title = document.createElement("h3");
    title.textContent = evento.title;
    const date = document.createElement("p");
    date.textContent = `Fecha: ${evento.date}`;
    const text = document.createElement("p");
    text.textContent = evento.text;

    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(text);

    container.appendChild(timelineCircle);
    container.appendChild(card);
    timelineElement.appendChild(container);
  });
}

getZelda();
