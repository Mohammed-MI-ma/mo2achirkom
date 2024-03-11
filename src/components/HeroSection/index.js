import React from "react";
import style from "./heroSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { bgBlocTop } from "../../images";
import { useTranslation } from "react-i18next";
import ActionButton from "../ActionButton";
import { GoSkipFill } from "react-icons/go";
import { BsCalculatorFill } from "react-icons/bs";
import { Col, ConfigProvider, Row, Steps, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { setModalSimulationIsOpened } from "../../reducers/applicationService/applicationSlice";
const HeroDescription = ({ language }) => {
  const { t } = useTranslation();
  const fontCurentlyUsed = `Primary-Regular-${language}`;
  const specialFontCurentlyUsed = `Special-Logo-${language}`;

  const d = useDispatch();

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
        <br></br>
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
          <Link to="https://www.rsu.ma/ar/web/guest/accueil">
            <ActionButton
              title={t("leaveSite")}
              onClick={null}
              icon={<GoSkipFill />}
              size={"large"}
              style={{ background: "var(--color-theme)" }}
            >
              {t("SkipToRSU")}
            </ActionButton>{" "}
          </Link>

          <ActionButton
            title={null}
            onClick={() => d(setModalSimulationIsOpened(true))}
            icon={<BsCalculatorFill />}
            size={"large"}
            style={{ background: "var(--color-theme)" }}
          >
            {t("startSimulationNow")}
          </ActionButton>
        </footer>
      </section>
    </Col>
  );
};

const HeroSteps = () => {
  const language = useSelector((state) => state.application.language);
  const { t } = useTranslation();

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
                        {t("idcs")}
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
                    النتائج المرغوبة التي تم العثور عليها على منصتنا. في موقع
                    RSU.ma الرسمي، سيُطلب منك تقديم البيانات الحقيقية.
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
  const language = useSelector((state) => state.application.language);

  //__SITE DIRECTION: RTL or LTR
  const siteDir = useSelector((state) => state.application.siteDirection);

  //__SITE FONT_REGULAR:  FRENCH, ARABIC
  const siteFontReg = useSelector(
    (state) => state.application.sitePrimaryFontRegular
  );
  return (
    <div className={style.container}>
      <div
        className={style.wrapBlCmtmng}
        style={{
          paddingLeft: siteDir === "ltr" ? "20px" : "0px",
          paddingRight: siteDir === "ltr" ? "0px" : "20px",

          width: "100%",
          fontFamily: siteFontReg,
          background: `url(${bgBlocTop}) -254px -67px no-repeat, url(/o/rsu_theme/images/RSU-HERO-IMAGE2.png) 100% 100% no-repeat, linear-gradient(90deg,rgba(217,235,232,1) 100%,rgba(236,246,244,1) 72%,rgba(242,242,242,1) 74%, rgba(217,235,232,1) 77%,rgba(246,255,254,1) 100%)`,
        }}
      >
        <section style={{ width: "100%" }}>
          <Row
            style={{
              display: "flex",
              flexDirection: siteDir === "ltr" ? "row-reverse" : "row",
            }}
          >
            <HeroSteps />
            <HeroDescription language={language} />
          </Row>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
