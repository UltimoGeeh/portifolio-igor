document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const status = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = "Por favor, preencha todos os campos.";
      status.style.color = "red";
      return;
    }

    status.textContent = "Mensagem enviada com sucesso!";
    status.style.color = "green";
    form.reset();
  });
});