import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <main>
      <h1>Meu PWA com React</h1>
      <p>Funciona como SPA com suporte a PWA.</p>
    </main>
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
