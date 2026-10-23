
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

// Abre e fecha o menu em telas menores
menuToggle.addEventListener("click", () => {
    const menuAberto = nav.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", menuAberto);
    menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.textContent = menuAberto ? "✕" : "☰";
});

// Fecha o menu ao clicar em um link
nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        menuToggle.textContent = "☰";
    });
});

// Atualiza o ano automaticamente no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Prepara uma mensagem para enviar por e-mail
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !message) {
        formStatus.textContent = "Preencha seu nome e sua mensagem.";
        return;
    }

    const subject = encodeURIComponent(
        `Mensagem do portfólio - ${name}`
    );

    const body = encodeURIComponent(
        `Olá, Wallyson!\n\n${message}\n\nEnviado por: ${name}`
    );

    formStatus.textContent = "Abrindo seu aplicativo de e-mail...";

    window.location.href =
        `mailto:wallyson29@gmail.com?subject=${subject}&body=${body}`;
});
