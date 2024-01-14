"use strict";

document.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let line = document.querySelector(".line");
  let timelineCircles = document.querySelectorAll(".timeline-circle");
  let mainSection = document.querySelector("main");
  let scrollPosition = window.scrollY;

  // Calcula la posición en la que mainSection comienza
  let mainTop = mainSection.getBoundingClientRect().top;

  // Si el scroll ha pasado el inicio de mainSection, muestra .line
  if (mainTop < window.innerHeight) {
    line.style.opacity = 1;

    // Muestra gradualmente cada .timeline-circle
    timelineCircles.forEach(function (circle, index) {
      let circleTop = circle.getBoundingClientRect().top;
      if (circleTop < window.innerHeight) {
        setTimeout(function () {
          circle.style.opacity = 1;
        }, index * 200); // Retraso para un efecto de aparición escalonada
      }
    });
  } else {
    // Oculta .line y todos los .timeline-circle si el scroll retrocede
    line.style.opacity = 0;
    timelineCircles.forEach(function (circle) {
      circle.style.opacity = 0;
    });
  }
});
