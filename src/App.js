import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { loadFonts, loadImages } from "./services/functions/functions"; // Utility functions for loading fonts and images
import { FontsConfig } from "./fontsConfig";
import frFR from "antd/locale/fr_FR"; // French locale for Ant Design
import enUS from "antd/locale/en_US"; // English locale for Ant Design
import ImageConfig from "./config.dev"; // Configuration for images
import style from "./App.module.css";
function App() {
  const browserLanguage = navigator.language.split("-")[0];
  console.log("browserLanguage", browserLanguage);
  //__HOOKS
  /* const [appIsReady, setAppIsReady] = useState(false);
  const [locale, setLocale] = useState(browserLanguage === "fr" ? frFR : enUS);
  const [loading, setLoading] = useState(true);*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([loadFonts(FontsConfig), loadImages(ImageConfig)]);
        // setAppIsReady(true);
      } catch (error) {
        console.error("Error while preparing:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, [browserLanguage]);

  return (
    <div className="App">
      <header className={style.bgHeader}>
        <Navbar />
      </header>
    </div>
  );
}

export default App;
