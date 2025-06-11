// Variável global para armazenar o evento de instalação
let deferredPrompt;

// Mostrar o botão de instalação
const installButton = document.getElementById("installButton");
installButton.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) => {
  // Impedir o comportamento padrão (mostrar a barra de instalação do navegador)
  e.preventDefault();
  // Salvar o evento para ser disparado posteriormente
  deferredPrompt = e;
  // Mostrar o botão de instalação
  installButton.style.display = "block";

  // Evento de clique no botão de instalação
  installButton.addEventListener("click", () => {
    // Mostrar a caixa de diálogo de instalação
    deferredPrompt.prompt();
    // Esperar a resposta do usuário
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("Usuário aceitou a instalação");
      } else {
        console.log("Usuário rejeitou a instalação");
      }
      deferredPrompt = null;
    });
  });
});

// Registrar o Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then((registration) => {
      console.log("Service Worker registrado com sucesso:", registration);
    })
    .catch((error) => {
      console.log("Erro ao registrar o Service Worker:", error);
    });
}
