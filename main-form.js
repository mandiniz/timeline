"use strict";

console.log('El archivo JavaScript se ha cargado correctamente.');

function submitForm(event) {
  event.preventDefault(); // Evitar el envío automático del formulario
  console.log('La función submitForm se ha llamado correctamente.');

  const name = document.getElementById('name').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const telephone = document.getElementById('tel').value;
  const message = document.getElementById('message').value;

  if (!isValidPhoneNumber(telephone)) {
    alert('Please enter a valid telephone number with at least 9 digits (numbers only).');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!areAllFieldsFilled(name, lastname, email, telephone, message)) {
    alert('Please fill out all required fields.');
    return;
  }

  const formData = {
    name,
    lastname,
    email,
    telephone,
    message,
  };

  localStorage.setItem('formData', JSON.stringify(formData));

  alert('Submitted successfully.');

  document.getElementById('contactform').reset();

  const formDataString = localStorage.getItem('formData');
  const formDataObject = JSON.parse(formDataString);
  console.log(formDataObject);
}

function isValidPhoneNumber(telephone) {
  return /^[0-9]+$/.test(telephone) && telephone.length >= 9;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function areAllFieldsFilled(...fields) {
  return fields.every(field => field.trim() !== '');
}