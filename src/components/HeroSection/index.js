//__REACT
import React, { Suspense, lazy, useTransition } from "react";

//__REACT_REDUX
import { useDispatch, useSelector } from "react-redux";

//__REACT_ROUTER
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

//__ANTD
import { Button, ConfigProvider, Steps, Tooltip } from "antd";

//__COMPONENTS
import HeroDescription from "./HeroDescription";

//__ICONS
import { IoCopy } from "react-icons/io5";
import { BsQrCode } from "react-icons/bs";
import { CiVideoOn } from "react-icons/ci";

//__STYLING
import style from "./heroSection.module.css";

//__IMAGES
import { bgBlocTop } from "../../images";

import { setPromoVideoOpened } from "../../reducers/applicationService/applicationSlice";
// Lazily load the component responsible for starting the simulation modal
const VideoPlayer = lazy(() => import("../VideoPlayer"));

const HeroSteps = ({ language }) => {
  //Hooks
  const { t } = useTranslation();
  const d = useDispatch();
  const [isPending, startTransition] = useTransition();

  //Functions
  const handleButtonClick = (e) => {
    startTransition(() => {
      d(setPromoVideoOpened(e));
    });
  };
  const promoVideoOpened = useSelector(
    (state) => state.application.promoVideoOpened
  );

  const directionStyle = { direction: language === "ar" ? "rtl" : "ltr" };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#088772",
        },
      }}
    >
      <div className={style.descriptionCmtMeng} style={directionStyle}>
        <Steps
          type="navigation"
          size="small"
          current={1}
          items={[
            {
              title: (
                <Link to={t("RNP path")} style={{ color: "var(--color-text)" }}>
                  <StyledParagraph>
                    <Tooltip
                      title={
                        <p style={directionStyle}>{t("visitRnpWebsite")}</p>
                      }
                    >
                      <p>{t("idcs")}</p>
                    </Tooltip>
                  </StyledParagraph>
                </Link>
              ),
              status: "finish",
              description: (
                <StyledParagraph>
                  {t("visitRnpWebsiteDescription")}
                  <BsQrCode />
                </StyledParagraph>
              ),
            },
            {
              title: (
                <Link
                  to={t("RSU path")}
                  style={{
                    color: "var(--color-theme)",
                  }}
                >
                  <StyledParagraph
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    <Tooltip title={null} style={directionStyle}>
                      {t("startSimulationNow")}
                    </Tooltip>
                  </StyledParagraph>
                </Link>
              ),
              status: "process",
              description: (
                <>
                  <p
                    style={{
                      fontFamily: `Primary-Regular-${language}`,
                      fontSize: "var(--font-medium-size)",
                    }}
                  >
                    {t("startSimulationNowDesc")}
                  </p>
                  <Suspense fallback={<div>Loading...</div>}>
                    {promoVideoOpened && <VideoPlayer />}
                  </Suspense>

                  <Button
                    dir={language === "ar" ? "rtl" : "ltr"}
                    style={{
                      fontFamily: `Primary-Regular-${language}`,
                      fontSize: "var(--font-medium-size)",
                    }}
                    type="Link"
                    icon={<CiVideoOn />}
                    onClick={handleButtonClick}
                    className="w-full flex justify-center items-center"
                  >
                    <u> {t("Vidéo promotionnelle")}</u>
                  </Button>
                </>
              ),
            },
            {
              title: (
                <Tooltip title={null}>
                  <p
                    style={{
                      fontFamily: `Primary-Regular-${language}`,
                      fontSize: "var(--font-medium-size)",
                    }}
                  >
                    {t("MovingToRSU")}
                  </p>
                </Tooltip>
              ),
              status: "wait",
              description: (
                <p
                  style={{
                    fontFamily: `Primary-Regular-${language}`,
                    fontSize: "var(--font-medium-size)",
                  }}
                >
                  {t("CopyPaste")}
                  <IoCopy />
                </p>
              ),
            },
          ]}
        />
      </div>
    </ConfigProvider>
  );
};

const HeroSection = () => {
  const language = useSelector((state) => state.application.language);
  return (
    <section
      className={`flex flex-col-reverse lg:flex-row items-center ${
        language === "fr" ? "lg:flex-row-reverse" : ""
      }`}
      style={{
        background: `url(${bgBlocTop}) -100px 40px no-repeat, url(${bgBlocTop}) 100% 100% no-repeat, linear-gradient(90deg,rgba(217,235,232,1) 100%,rgba(236,246,244,1) 72%,rgba(242,242,242,1) 74%, rgba(217,235,232,1) 77%,rgba(246,255,254,1) 100%)`,
      }}
    >
      <div className="lg:w-1/2  p-4">
        <HeroSteps language={language} />
      </div>
      <div className="lg:w-1/2  p-4">
        <HeroDescription language={language} />
      </div>
    </section>
  );
};

export default HeroSection;

// Component to render a styled paragraph with font based on language
const StyledParagraph = ({ children, style }) => {
  const language = useSelector((state) => state.application.language);

  return (
    <p
      style={{
        ...style,
        fontFamily: `Primary-Regular-${language}`,
        fontSize: "var(--font-medium-size)",
      }}
    >
      {children}
    </p>
  );
};
