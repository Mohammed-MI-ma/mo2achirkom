import React, { useTransition, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Spin } from "antd";
import { BsCalculatorFill } from "react-icons/bs";
import { setModalSimulationIsOpened } from "../../../reducers/applicationService/applicationSlice";
import ActionButton from "../../ActionButton";
import style from "./HeroDescription.module.css";

const HeroDescription = ({ language }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isPending, startTransition] = useTransition();

  const primaryRegularFont = `Primary-Regular-${language}`;
  const specialLogoFont = `Special-Logo-${language}`;

  // Memoized styles
  const sectionStyle = useMemo(
    () => ({
      dir: language === "ar" ? "rtl" : "ltr",
      fontFamily: primaryRegularFont,
      fontSize: "var(--font-medium-size)",
    }),
    [language, primaryRegularFont]
  );

  const headerStyle = useMemo(
    () => ({
      color: "var(--color-red)",
      fontFamily: specialLogoFont,
      paddingBottom: "1.25rem",
      fontSize: "var(--font-extra-large-size)",
    }),
    [specialLogoFont]
  );

  const actionButtonStyle = useMemo(
    () => ({
      background: "var(--color-theme)",
    }),
    []
  );

  const handleClick = () => {
    startTransition(() => {
      dispatch(setModalSimulationIsOpened(true));
    });
  };

  return (
    <section
      dir={language === "ar" ? "rtl" : "ltr"}
      className={style.descriptionCmtMeng}
    >
      <header className="bg-transparent">
        <h1 style={headerStyle}>
          {t(
            "Une clé pour tous les programmes sociaux pour chaque Marocain, 100% marocain."
          )}
        </h1>
      </header>
      <main>
        <p style={sectionStyle}>
          {t("introductionFirstPart")}
          <b>{t("keyword_FREE")}</b>
          {t("introductionSecondPart")}
          <b>{t("privacy")}</b>
          {t("introductionThirdPart")}
        </p>
      </main>
      <footer className="mt-5">
        <Spin spinning={isPending}>
          <ActionButton
            color={"var(--color-theme)"}
            title={null}
            onClick={handleClick}
            icon={<BsCalculatorFill />}
            size={"large"}
            style={{ ...actionButtonStyle, width: "100%" }}
          >
            {t("startSimulationNow")}
          </ActionButton>
        </Spin>
      </footer>
    </section>
  );
};

export default HeroDescription;
