//__REACT
import React, { Suspense, lazy, useEffect, useState } from "react";

//__REACT-DOM
import { Navigate, Route, Routes } from "react-router-dom";

//__REACT_REDUX
import { useSelector } from "react-redux";

//__ANTD
import { ConfigProvider, BackTop } from "antd";
import frFR from "antd/lib/locale/fr_FR";
import arEG from "antd/lib/locale/ar_EG";

//__CONFIG
import { loadFonts, loadImages } from "./services/functions/functions";
import ImageConfig from "./config.dev";
import { FontsConfig } from "./fontsConfig";

//__STYLING
import style from "./App.module.css";

//__COMPONENTS && LAZY COMPONENTS
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Loader from "./components/Loader";
// Lazy load component for mobile view
const LazyAsideMenu = lazy(() =>
  import("./components/Mobile__Components/AsideMenuMobile")
);
// Lazily load the component responsible for starting the simulation modal
const SimulationModal = lazy(() =>
  import("./components/simulation_business_logic/SimulationModal")
);

function App() {
  // Initializing state for tracking the loading status of necessary assets
  const [appIsReady, setAppIsReady] = useState(false);

  // Retrieve the state indicating whether the simulation modal is open or closed
  const openModalSimulation = useSelector(
    (state) => state.application.modalSimulationIsOpened
  );
  // Retrieve the currently selected language from the application state
  const language = useSelector((state) => state.application.language);

  const [loading, setLoading] = useState(true);

  // Initialize locale state as null
  const [locale, setLocale] = useState(null);

  // useEffect hook to fetch fonts and images, then update loading state
  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([loadFonts(FontsConfig), loadImages(ImageConfig)]);
      } catch (error) {
        console.error("Error while preparing:", error);
      } finally {
        setLoading(false);
        setAppIsReady(true);
      }
    };

    fetchData();
  }, []);

  // Update locale whenever language changes
  useEffect(() => {
    setLocale(language === "ar" ? arEG : frFR);
  }, [language]);

  if (!appIsReady) {
    return <Loader isLoading={loading} />;
  }

  return (
    <ConfigProvider locale={locale}>
      <div className={style.wrapper}>
        <header className={style.bgHeader}>
          <Navbar />
        </header>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/${language}/web/guest/accueil`} />}
          />
          <Route
            path={`/${language}/web/guest/accueil`}
            element={<HomePage language={language} />}
          />
        </Routes>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {openModalSimulation && <LazyAsideMenu />}
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        {openModalSimulation && <SimulationModal />}
      </Suspense>
      <BackTop visibilityHeight={0} />
    </ConfigProvider>
  );
}

export default App;
