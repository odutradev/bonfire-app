import { createRoot } from "react-dom/client";
import './index.css';

const App = () => {
  return (
<div className="container">
  <h1>Bem-vindo ao Meu App PWA</h1>
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
