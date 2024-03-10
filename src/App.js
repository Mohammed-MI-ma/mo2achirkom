import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { loadFonts, loadImages } from "./services/functions/functions";
import { FontsConfig } from "./fontsConfig";
import ImageConfig from "./config.dev";
import style from "./App.module.css";
import { ConfigProvider, Spin, BackTop } from "antd";
import { useDispatch, useSelector } from "react-redux";
import frFR from "antd/lib/locale/fr_FR"; // Correct import for French locale
import arEG from "antd/lib/locale/ar_EG"; // Correct import for Arabic locale
import {
  setSideMenuIsOpened,
  setModalSimulationIsOpened,
} from "./reducers/applicationService/applicationSlice";
import { useTranslation } from "react-i18next";
import DrawerComponent from "./components/DrawerComponent";
import MenuAsideComponent from "./components/MenuAsideComponent";
import { Helmet } from "react-helmet";
import HeroSection from "./components/HeroSection";
import BenefitsSubscribingComponent from "./components/BenefitsSubscribingComponent";
import CustomModal from "./components/CustomModal";
import HomePage from "./pages/HomePage";

function App() {
  // Initializing state for tracking the loading status of necessary assets
  const [appIsReady, setAppIsReady] = useState(false);

  const language = useSelector((state) => state.application.language);
  const open = useSelector((state) => state.application.sideMenuIsOpened);
  const openModalSimulation = useSelector(
    (state) => state.application.modalSimulationIsOpened
  );

  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState(null); // Initialize locale state as null
  const [placement, setPlacement] = useState(null);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setSideMenuIsOpened(false));
  };

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

  useEffect(() => {
    setPlacement(language === "ar" ? "right" : "left");
  }, [language]);

  // Update locale whenever language changes
  useEffect(() => {
    setLocale(language === "ar" ? arEG : frFR);
  }, [language]);

  if (!appIsReady) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin size="large" spinning={loading} />
      </div>
    );
  }

  return (
    <ConfigProvider locale={locale}>
      <Helmet>
        <html lang={language} />
        <title>{t("home")}</title>
        {/* Add other meta tags as needed */}
      </Helmet>
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
            element={<HomePage />}
          />
        </Routes>
      </div>
      <DrawerComponent
        open={open}
        lang={language}
        width={"100%"}
        placement={placement}
        onClose={onClose}
        title={t("services")}
      >
        <MenuAsideComponent />
      </DrawerComponent>
      <CustomModal
        open={openModalSimulation}
        close={() => dispatch(setModalSimulationIsOpened(false))}
      />{" "}
      <BackTop visibilityHeight={0} />
    </ConfigProvider>
  );
}

export default App;
