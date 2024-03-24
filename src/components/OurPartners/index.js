import { Image } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { BULLETIN } from "../../images";
import asd from "../../assets/images/ASD.png";
import { useTranslation } from "react-i18next";

const OurPartners = () => {
  const language = useSelector((state) => state.application.language);
  const { t } = useTranslation();
  // Define variables for the primary regular font and the special logo font,
  // incorporating the language into their names for localization purposes.
  const primaryRegularFont = `Special-Logo-${language}`;

  // Styles
  const sectionStyle = {
    dir: language === "ar" ? "rtl" : "ltr",
    fontFamily: primaryRegularFont,
    fontSize: "50px",
    paddingTop: "70px",
  };
  return (
    <section
      className={`w-full flex flex-col `}
      style={{
        minHeight: "384px",
        background: "white",
      }}
    >
      <h1 className={`text-center`} style={sectionStyle}>
        {t("Our partners")}
      </h1>
      <div
        className="grid lg:grid-cols-6 sm:grid-cols-1 md:grid-cols-3 gap-10 items-center flex-grow "
        style={{ margin: "0 auto" }}
      >
        <div className="text-center">
          <Image src={asd} preview={false} width={"150px"} />
        </div>
        <div className="text-center">
          <Image src={BULLETIN} preview={false} width={"150px"} />
        </div>
        <div className="text-center">
          <Image
            src={
              "https://raw.githubusercontent.com/Mohammed-MI-ma/assets/main/ASD.png"
            }
            preview={false}
            width={"150px"}
          />{" "}
        </div>
        <div className="text-center">
          <Image
            src={
              "https://raw.githubusercontent.com/Mohammed-MI-ma/assets/main/ASD.png"
            }
            preview={false}
            width={"150px"}
          />{" "}
        </div>
        <div className="text-center">
          <Image
            src={
              "https://raw.githubusercontent.com/Mohammed-MI-ma/assets/main/ASD.png"
            }
            preview={false}
            width={"150px"}
          />{" "}
        </div>
        <div className="text-center">
          <Image
            src={
              "https://raw.githubusercontent.com/Mohammed-MI-ma/assets/main/ASD.png"
            }
            preview={false}
            width={"150px"}
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
