import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import reportWebVitals from "./reportWebVitals";

//__COMPONENTS
import App from "./src/App";

//__STYLING
import "./index.css";

import { Provider } from "";
//__STORE
import Store from "./store";

// Initialize i18n
i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: "fr", // Fallback language
    debug: false, // Disable debug mode in production
    interpolation: {
      escapeValue: false, // Not needed for React
    },
    resources: {
      en: {
        translation: require("./i18n/ar/translation.json"), // English translation
      },
      fr: {
        translation: require("./i18n/fr/translation.json"), // French translation
      },
    },
  });
// Get the currently used language

// Set the locale based on the current language

// Render the app
ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <Provider store={Store}>
        <App />
      </Provider>
    </React.StrictMode>
  </I18nextProvider>,
  document.getElementById("root")
);

// Measure performance in the app
reportWebVitals(console.log);
