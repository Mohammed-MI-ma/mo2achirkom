//__REACT
import React, { Suspense, lazy, useEffect, useState } from "react";

//__REACT-DOM
import { Navigate, Route, Routes } from "react-router-dom";

//__REACT_REDUX
import { useSelector } from "react-redux";

//__ANTD
import { ConfigProvider, BackTop, Spin } from "antd";
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

import Loader from "./components/Loader";
import Footer from "./components/Footer";
import LazyAsideMenu from "./components/Mobile__Components/AsideMenuMobile";
import { LoadingOutlined } from "@ant-design/icons";
import { Helmet } from "react-helmet";
import BankTransferPage from "./pages/BankTransferPage";
import HoverableCard from "./components/HoverableCard";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));

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

  // Retrieve the state indicating whether the Menu Drawer is open or closed

  // Retrieve the currently selected language from the application state
  const language = useSelector((state) => state.application.language);
  const primaryRegularFont = `Primary-Regular-${language}`;

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
    <>
      <ConfigProvider
        locale={locale}
        theme={{
          token: {
            fontFamily: primaryRegularFont,
            hoverBorderColor: " #088772",
          },
        }}
      >
        <div className={style.wrapper}>
          <header className={style.bgHeader}>
            <Navbar />
          </header>
          <Routes>
            <Route
              path="/"
              element={<Navigate to={`/${language}/web/guest/acceuil`} />}
            />
            <Route
              path={`/${language}/web/guest/acceuil`}
              element={
                <Suspense
                  fallback={
                    <Spin
                      spinning
                      fullscreen
                      indicator={
                        <LoadingOutlined style={{ fontSize: 24 }} spin />
                      }
                    />
                  }
                >
                  <HomePage language={language} />
                </Suspense>
              }
            />
            <Route
              path={`/${language}/web/guest/bankTransfer`}
              element={
                <Suspense
                  fallback={
                    <Spin
                      spinning
                      fullscreen
                      indicator={
                        <LoadingOutlined style={{ fontSize: 24 }} spin />
                      }
                    />
                  }
                >
                  <BankTransferPage language={language} />
                </Suspense>
              }
            />
            <Route
              path={`/${language}/recalcul/account/log-in`}
              element={
                <Suspense
                  fallback={
                    <Spin
                      spinning
                      fullscreen
                      indicator={
                        <LoadingOutlined style={{ fontSize: 24 }} spin />
                      }
                    />
                  }
                >
                  <LoginPage language={language} />
                </Suspense>
              }
            />
            <Route
              path={`/${language}/recalcul/account/register`}
              element={
                <Suspense
                  fallback={
                    <Spin
                      spinning
                      fullscreen
                      indicator={
                        <LoadingOutlined style={{ fontSize: 24 }} spin />
                      }
                    />
                  }
                >
                  <SignUpPage language={language} />
                </Suspense>
              }
            />
          </Routes>

          <Footer />
          <BackTop visibilityHeight={0} />
        </div>
        <LazyAsideMenu />
        <Suspense fallback={<div>Loading...</div>}>
          {openModalSimulation && <SimulationModal />}
        </Suspense>
        <div
          className="flex fixed shadow"
          style={{
            bottom: 0,
            left: 0,
            background: "var(--color-theme)",
            minWidth: "300px",
            minHeight: "50px",
            borderTopLeftRadius: "50px",
            borderTopRightRadius: "50px",
            textAlign: "center",
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
            zIndex: "4000",
          }}
        >
          <div className="w-full flex items-center justify-center">
            <HoverableCard>هل تحتاج إلى مساعدة؟ </HoverableCard>
          </div>
        </div>
      </ConfigProvider>
    </>
  );
}

export default App;
