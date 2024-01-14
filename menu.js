"use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", toggleMenu);
navLinks.forEach(link => link.addEventListener("click", closeMenu));
window.addEventListener("scroll", closeMenuOnScroll);

function toggleMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function closeMenuOnScroll() {
  closeMenu();
}