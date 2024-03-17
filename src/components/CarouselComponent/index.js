import React, { useEffect, useState } from "react";
import { Carousel, ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import { t } from "i18next";

const CarouselComponent = () => {
  const languag = useSelector((state) => state.application.language);
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
  // Define your media query conditions and corresponding styles
  const mobileStyles = {
    // Styles for mobile screens (max-width: 576px)
    width: "100vw",
    padding: "0px",
  };

  const tabletStyles = {
    // Styles for mobile screens (max-width: 576px)
    padding: "15px",
  };

  const desktopStyles = {
    padding: "15px",
  };
  const contentStyle = {
    minHeight: "170px",
    backgroundColor: "#ffffff",
    boxShadow: " 6px 0px 6px -3px #000000",
    padding: " 17px 15px 5px 15px",
    fontSize: "20px",
    fontFamily: "Primary-Regular-ar",
    direction: languag === "ar" ? "rtl" : "ltr",
  }; // Determine which styles to apply based on windowWidth
  let inlineMediaQueries;
  if (windowWidth <= 576) {
    inlineMediaQueries = mobileStyles;
  } else if (windowWidth <= 768) {
    inlineMediaQueries = tabletStyles;
  } else {
    inlineMediaQueries = desktopStyles;
  }
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "var(--color-theme)",
        },
      }}
    >
      <Carousel
        style={{ ...inlineMediaQueries }}
        autoplay
        dotPosition={"bottom"}
      >
        <div style={{ background: "white" }}>
          <p style={contentStyle}>{t("DoUKnowFirstCard")}</p>
        </div>
        <div style={{ background: "white" }}>
          <p style={contentStyle}>{t("DoUKnowFirstCard")}</p>
        </div>{" "}
        <div style={{ background: "white" }}>
          <p style={contentStyle}>{t("DoUKnowFirstCard")}</p>
        </div>
        <div style={{ background: "white" }}>
          <p style={contentStyle}>{t("DoUKnowFirstCard")}</p>
        </div>{" "}
        <div style={{ background: "white" }}>
          <p style={contentStyle}>{t("DoUKnowFirstCard")}</p>
        </div>
        <div style={{ background: "white" }}>
          <p style={contentStyle}>{t("DoUKnowFirstCard")}</p>
        </div>
      </Carousel>
    </ConfigProvider>
  );
};
export default CarouselComponent;
