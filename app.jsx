import { createRoot } from "react-dom/client";
import './index.css';

const App = () => {
  return (
<div className="container">
  <h1>Bem-vindo ao Meu Site</h1>
  <p>Essa é a página inicial da aplicação. Aproveite a experiência!</p>
  <a href="/sobre" className="button">Saiba Mais</a>
</div>

  );
};

const root = document.getElementById("root");
createRoot(root).render(<App />);

// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}
