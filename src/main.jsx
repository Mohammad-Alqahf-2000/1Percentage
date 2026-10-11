import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// i18next
import "./i18n/config.js";

// My App UI
import { AppUIContextProvider } from "./contexts/AppUIContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppUIContextProvider>
      <App />
    </AppUIContextProvider>
  </StrictMode>,
);
