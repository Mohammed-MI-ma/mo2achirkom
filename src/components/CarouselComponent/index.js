import React from "react";
import { Carousel, ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import { t } from "i18next";

const CarouselComponent = () => {
  const languag = useSelector((state) => state.application.language);

  const contentStyle = {
    minHeight: "170px",
    backgroundColor: "#ffffff",
    boxShadow: " 6px 0px 6px -3px #000000",
    padding: " 17px 15px 5px 15px",
    fontSize: "20px",
    fontFamily: "Primary-Regular-ar",
    direction: languag === "ar" ? "rtl" : "ltr",
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "var(--color-theme)",
        },
      }}
    >
      <Carousel
        style={{ width: "40vw", paddingLeft: "32px" }}
        autoplay
        dotPosition={"bottom"}
      >
        <div style={{ background: "white" }}>
          <p style={contentStyle}>{t("DoUKnowFirstCard")}</p>
        </div>
        <div>
          <div style={{ background: "white" }}>
            <p style={contentStyle}>{t("DoUKnowFirstCard")}</p>
          </div>
        </div>
      </Carousel>
    </ConfigProvider>
  );
};
export default CarouselComponent;
