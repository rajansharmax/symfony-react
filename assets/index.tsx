import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./js/components/App";
import reportWebVitals from "./reportWebVitals";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("app");
  if (!container) {
    throw new Error("Target container 'app' not found in the DOM.");
  }

  const root = createRoot(container!);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

reportWebVitals();
