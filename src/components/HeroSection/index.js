import React, { useEffect, useState, useTransition } from "react";
import style from "./heroSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { bgBlocTop } from "../../images";
import { useTranslation } from "react-i18next";
import ActionButton from "../ActionButton";
import { GoSkipFill } from "react-icons/go";
import { BsCalculatorFill } from "react-icons/bs";
import { Col, ConfigProvider, Divider, Row, Spin, Steps, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { setModalSimulationIsOpened } from "../../reducers/applicationService/applicationSlice";
const HeroDescription = ({ language }) => {
  const { t } = useTranslation();
  const fontCurentlyUsed = `Primary-Regular-${language}`;
  const specialFontCurentlyUsed = `Special-Logo-${language}`;

  const d = useDispatch();
  const [isPending, startTransition] = useTransition();

  return (
    <Col
      xs={{ flex: "100%" }}
      sm={{ flex: "100%" }}
      md={{ flex: "50%" }}
      lg={{ flex: "50%" }}
      xl={{ flex: "50%" }}
    >
      <section
        className={style.descriptionCmtMeng}
        style={{ direction: language === "ar" ? "rtl" : "ltr" }}
      >
        <h1 style={{ fontFamily: specialFontCurentlyUsed }}>{t("Logo")}</h1>
        <p
          style={{
            fontFamily: fontCurentlyUsed,
            fontSize: "var(--font-medium-size)",
            display: "inline",
          }}
        >
          {t("introductionFirstPart")}
          <b>{t("keyword_FREE")}</b>
          {t("introductionSecondPart")}
          <b>{t("privacy")}</b>
          {t("introductionThirdPart")}
        </p>
        <br />
        <div
          style={{
            fontFamily: fontCurentlyUsed,
            fontSize: "var(--font-medium-size)",
          }}
        >
          <p>{t("service24/7")}</p>
        </div>
        <footer>
          <ActionButton
            title={t("leaveSite")}
            onClick={null}
            icon={<GoSkipFill />}
            size={"large"}
            style={{ background: "var(--color-theme)" }}
          >
            <Link to="https://www.rsu.ma/ar/web/guest/accueil">
              {t("SkipToRSU")}{" "}
            </Link>
          </ActionButton>
          <Spin spinning={isPending}>
            <ActionButton
              title={null}
              onClick={() =>
                startTransition(() => d(setModalSimulationIsOpened(true)))
              }
              icon={<BsCalculatorFill />}
              size={"large"}
              style={{ background: "var(--color-theme)" }}
            >
              {t("startSimulationNow")}
            </ActionButton>
          </Spin>
        </footer>
      </section>
    </Col>
  );
};

const HeroSteps = ({ language }) => {
  const { t } = useTranslation();
  const specialFontCurentlyUsed = `Special-Logo-${language}`;

  return (
    <Col
      className={style.carouselHolder}
      xs={{ flex: "100%" }}
      sm={{ flex: "100%" }}
      md={{ flex: "50%" }}
      lg={{ flex: "50%" }}
      xl={{ flex: "50%" }}
    >
      <div
        className={style.descriptionCmtMeng}
        style={{ direction: language === "ar" ? "rtl" : "ltr" }}
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#088772",
            },
          }}
        >
          <h1 style={{ fontFamily: specialFontCurentlyUsed }}>
            ما هي الخطوات التي يجب أن تتخذها؟
          </h1>
          <Steps
            type="navigation"
            size="small"
            current={0}
            className="site-navigation-steps"
            items={[
              {
                title: (
                  <Link to={t("RNP path")} style={{ color: "gray" }}>
                    <ParagraphContainer>
                      <Tooltip
                        title={
                          <p
                            style={{
                              direction: language === "ar" ? "rtl" : "ltr",
                            }}
                          >
                            {t("visitRnpWebsite")}
                          </p>
                        }
                      >
                        <p>{t("idcs")}</p>
                      </Tooltip>
                    </ParagraphContainer>
                  </Link>
                ),
                status: "finish",
                description: (
                  <ParagraphContainer>
                    {t("visitRnpWebsiteDescription")}
                  </ParagraphContainer>
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
                    <ParagraphContainer
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      <Tooltip
                        title={
                          <p
                            style={{
                              direction: language === "ar" ? "rtl" : "ltr",
                            }}
                          >
                            {t("visitRnpWebsite")}
                          </p>
                        }
                        style={{ direction: language === "ar" ? "rtl" : "ltr" }}
                      >
                        {t("startSimulationNow")}
                      </Tooltip>
                    </ParagraphContainer>
                  </Link>
                ),
                status: "process",
                description: (
                  <p
                    style={{
                      fontFamily: `Primary-Regular-${language}`,
                      fontSize: "var(--font-medium-size)",
                    }}
                  >
                    الآن يمكنك بدء المحاكاة، محاكاة ممتعة!
                  </p>
                ),
              },
              {
                title: (
                  <Tooltip title="Thanks for using antd. Have a nice day!">
                    <p
                      style={{
                        fontFamily: `Primary-Regular-${language}`,
                        fontSize: "var(--font-medium-size)",
                      }}
                    >
                      اذهب إلى RSU.MA
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
                    عند زيارة RSU، ستجد واجهة مستخدم مماثلة، لذا يمكنك تطبيق
                  </p>
                ),
              },
            ]}
          />
        </ConfigProvider>
      </div>
    </Col>
  );
};
const ParagraphContainer = ({ children, style }) => {
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
const HeroSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const language = useSelector((state) => state.application.language);

  //__SITE DIRECTION: RTL or LTR
  const siteDir = useSelector((state) => state.application.siteDirection);

  //__SITE FONT_REGULAR:  FRENCH, ARABIC
  const siteFontReg = useSelector(
    (state) => state.application.sitePrimaryFontRegular
  );

  // Define your media query conditions and corresponding styles
  const mobileStyles = {
    // Styles for mobile screens (max-width: 576px)
    flexDirection: siteDir === "ltr" ? "column" : "column-reverse",
  };

  const tabletStyles = {
    flexDirection: siteDir === "ltr" ? "column" : "column-reverse",
  };

  const desktopStyles = {
    flexDirection: siteDir === "rtl" ? "row" : "row-reverse",
  };

  // Determine which styles to apply based on windowWidth
  let inlineMediaQueries;
  if (windowWidth <= 576) {
    inlineMediaQueries = mobileStyles;
  } else if (windowWidth <= 768) {
    inlineMediaQueries = tabletStyles;
  } else {
    inlineMediaQueries = desktopStyles;
  }

  return (
    <div className={style.container}>
      <div
        className={style.wrapBlCmtmng}
        style={{
          // paddingLeft: siteDir === "ltr" ? "20px" : "0px",
          //  paddingRight: siteDir === "ltr" ? "0px" : "20px",

          width: "100%",
          fontFamily: siteFontReg,
          background: `url(${bgBlocTop}) -254px -67px no-repeat, url(/o/rsu_theme/images/RSU-HERO-IMAGE2.png) 100% 100% no-repeat, linear-gradient(90deg,rgba(217,235,232,1) 100%,rgba(236,246,244,1) 72%,rgba(242,242,242,1) 74%, rgba(217,235,232,1) 77%,rgba(246,255,254,1) 100%)`,
        }}
      >
        <section style={{ width: "100%" }}>
          {" "}
          <div className="bg-blue-500 text-white p-4">
            This is a div with a blue background and white text, padded with 4
            units.
          </div>
          <Row style={inlineMediaQueries}>
            <HeroSteps language={language} />
            <Divider className={style.divider} />
            <HeroDescription language={language} />
          </Row>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
