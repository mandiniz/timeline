"use strict";

document.addEventListener("scroll", function handleScroll() {
  const header = document.querySelector("header");
  const line = document.querySelector(".line");
  const timelineCircles = document.querySelectorAll(".timeline-circle");
  const mainSection = document.querySelector("main");
  const scrollPosition = window.scrollY;

  const mainTop = mainSection.getBoundingClientRect().top;

  if (isScrollPastMainSection(mainTop)) {
    showLineAndTimelineCircles();
  } else {
    hideLineAndTimelineCircles();
  }
});

function isScrollPastMainSection(mainTop) {
  return mainTop < window.innerHeight;
}

function showLineAndTimelineCircles() {
  line.style.opacity = 1;

  timelineCircles.forEach(function (circle, index) {
    const circleTop = circle.getBoundingClientRect().top;

    if (circleTop < window.innerHeight) {
      setTimeout(function () {
        circle.style.opacity = 1;
      }, index * 200);
    }
  });
}

function hideLineAndTimelineCircles() {
  line.style.opacity = 0;

  timelineCircles.forEach(function (circle) {
    circle.style.opacity = 0;
  });
}