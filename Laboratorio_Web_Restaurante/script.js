/* SAZÓN BORICUA — interacciones de la página principal.
   Los selectores se validan antes de usarse para evitar errores
   si un elemento no existe en una página determinada. */
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Año automático en el pie de página.
  var yearElement = document.getElementById("currentYear");
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  // Resaltar las tarjetas al pasar el ratón y al recibir el foco.
  var foodCards = document.querySelectorAll(".food-card");
  foodCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () { card.classList.add("is-highlighted"); });
    card.addEventListener("mouseleave", function () { card.classList.remove("is-highlighted"); });
    card.addEventListener("focusin", function () { card.classList.add("is-highlighted"); });
    card.addEventListener("focusout", function () { card.classList.remove("is-highlighted"); });
  });

  // Abrir un modal de Bootstrap con detalles del plato seleccionado.
  var detailsButtons = document.querySelectorAll(".details-button");
  detailsButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var card = button.closest(".food-card");
      if (!card) return;
      var title = document.getElementById("dishModalTitle");
      var description = document.getElementById("dishModalDescription");
      var price = document.getElementById("dishModalPrice");
      var modalElement = document.getElementById("dishModal");
      if (!title || !description || !price || !modalElement || !window.bootstrap) return;
      title.textContent = card.dataset.dish || "Detalle del plato";
      description.textContent = card.dataset.description || "Consulta con nuestro equipo para más información.";
      price.textContent = card.dataset.price || "";
      bootstrap.Modal.getOrCreateInstance(modalElement).show();
    });
  });

  // Validación básica del formulario de suscripción con retroalimentación.
  var newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var email = document.getElementById("newsletterEmail");
      var message = document.getElementById("newsletterMessage");
      if (!email || !message) return;
      if (!email.checkValidity()) {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        message.textContent = "Verifica el correo electrónico antes de continuar.";
        message.setAttribute("role", "alert");
        email.focus();
        return;
      }
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
      message.textContent = "¡Gracias! El formulario se validó correctamente en esta demostración.";
      message.setAttribute("role", "status");
      newsletterForm.reset();
    });
  }

  // Validación para formularios en las páginas subordinadas.
  document.querySelectorAll(".js-validate-form").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var feedback = form.querySelector(".form-feedback");
      if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add("was-validated");
        if (feedback) feedback.textContent = "Revisa los campos resaltados e inténtalo nuevamente.";
        var firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      form.classList.add("was-validated");
      if (feedback) feedback.textContent = "¡Gracias! Los datos se validaron correctamente. Esta demostración no envía información a un servidor.";
      form.reset();
    });
  });
});