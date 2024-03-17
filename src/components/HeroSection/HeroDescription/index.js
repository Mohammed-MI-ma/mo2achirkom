import React, { useTransition } from "react";
import style from "./HeroDescription.module.css";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import ActionButton from "../../ActionButton";
import { GoSkipFill } from "react-icons/go";
import { BsCalculatorFill } from "react-icons/bs";
import { Popconfirm, Spin, message } from "antd";
import { Link } from "react-router-dom";
import { setModalSimulationIsOpened } from "../../../reducers/applicationService/applicationSlice";
const HeroDescription = ({ language }) => {
  // Retrieve the translation function from the useTranslation hook
  const { t } = useTranslation();

  // Calling the useDispatch hook to get the dispatch function
  const d = useDispatch();

  // useTransition is a React Concurrent Mode feature that allows you to start a
  // transition and track its pending state. It returns an array where the first
  // element indicates whether a transition is pending, and the second element
  // is a function to start a new transition.
  const [isPending, startTransition] = useTransition();

  // Define variables for the primary regular font and the special logo font,
  // incorporating the language into their names for localization purposes.
  const primaryRegularFont = `Primary-Regular-${language}`;
  const specialLogoFont = `Special-Logo-${language}`;

  // Styles
  const sectionStyle = {
    dir: language === "ar" ? "rtl" : "ltr",
    fontFamily: primaryRegularFont,
    fontSize: "var(--font-medium-size)",
  };
  const popOverStyle = {
    fontFamily: primaryRegularFont,
    direction: language === "ar" ? "rtl" : "ltr",
  };
  const headerStyle = {
    fontFamily: specialLogoFont,
    paddingBottom: "1.25rem",
  };
  const actionButtonStyle = {
    background: "var(--color-theme)",
  };

  const confirm = (e) => {
    message.success("Merci de nous avoir donné une chance, camarade");
  };
  return (
    <section
      dir={language === "ar" ? "rtl" : "ltr"}
      className={style.descriptionCmtMeng}
    >
      <h1 style={headerStyle}>{t("Logo")}</h1>
      <p style={sectionStyle}>
        {t("introductionFirstPart")}
        <b>{t("keyword_FREE")}</b>
        {t("introductionSecondPart")}
        <b>{t("privacy")}</b>
        {t("introductionThirdPart")}
      </p>
      <br />
      <div
        style={{
          fontFamily: primaryRegularFont,
          fontSize: "var(--font-medium-size)",
        }}
      >
        <p>{t("service24/7")}</p>
      </div>
      <footer className="mt-5">
        {/*Define an ActionButton component to provide a link to skip to the RSU section*/}
        <Popconfirm
          showCancel={false}
          okType={"text"}
          onConfirm={confirm}
          okText={<div style={popOverStyle}>{t("noThanks")}</div>}
          title={<h1 style={popOverStyle}>{t("LeavingtoRsu")}</h1>}
          description={
            <Link to={t("RSU path")}>
              <div
                style={{
                  ...popOverStyle,
                  textDecoration: "underline",
                }}
              >
                {t("LeavingtoRsuLink")}
              </div>
            </Link>
          }
        >
          <ActionButton
            title={null}
            onClick={null}
            icon={<GoSkipFill />}
            size={"large"}
            style={actionButtonStyle}
          >
            {t("SkipToRSU")}
          </ActionButton>
        </Popconfirm>
        {/* Define an ActionButton component to initiate the simulation modal flow */}
        <Spin spinning={isPending}>
          <ActionButton
            title={null}
            onClick={() =>
              startTransition(() => d(setModalSimulationIsOpened(true)))
            }
            icon={<BsCalculatorFill />}
            size={"large"}
            style={{ ...actionButtonStyle, minWidth: "328px", width: "100%" }}
          >
            {t("startSimulationNow")}
          </ActionButton>
        </Spin>
      </footer>
    </section>
  );
};
export default HeroDescription;
