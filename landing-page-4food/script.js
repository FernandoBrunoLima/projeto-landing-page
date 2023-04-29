const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.querySelector("#name");
  const fone = form.querySelector("#fone");
  const email = form.querySelector("#email");
  const notes = form.querySelector("#notes");

  if (!name.value) {
    alert("Digite o seu nome");
  } else if (!fone.value) {
    alert("Digite seu número de telefone");
  } else if (email.value) {
    alert(`Entraremos em contato através do endereço ${email.value}.`);
    name.value = "";
    fone.value = "";
    email.value = "";
    notes.value = "";
  } else {
    alert("Por favor, digite um endereço de e-mail válido.");
  }
});

const buttons = document.querySelectorAll(".subscribe-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const planName = button.parentNode.querySelector("h3").textContent;
    document.getElementById("notes").value = `Plano selecionado: ${planName}`;
    document
      .querySelector("#container-form")
      .scrollIntoView({ behavior: "smooth" });
  });
});

const bannerButtons = document.querySelectorAll(".banner-button");

bannerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelector("#container-form")
      .scrollIntoView({ behavior: "smooth" });
  });
});

const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
