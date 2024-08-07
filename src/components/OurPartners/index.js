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
    fontSize: "30px",
  };
  return (
    <section
      className={`w-full flex flex-col py-10`}
      style={{
        minHeight: "384px",
        background: "white",
      }}
    >
      <h1 className={`text-center`} style={sectionStyle}>
        {t("Our partners")}
      </h1>
      <div
        className="grid lg:grid-cols-5 sm:grid-cols-1 md:grid-cols-3 gap-5 items-center flex-grow "
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
              "https://raw.githubusercontent.com/Mohammed-MI-ma/assets/main/cnssPArtner.png"
            }
            preview={false}
            width={"100px"}
          />
        </div>{" "}
        <div className="text-center">
          <Image
            src={
              "https://raw.githubusercontent.com/Mohammed-MI-ma/assets/main/rsuPartner.svg"
            }
            preview={false}
            width={"100px"}
          />{" "}
        </div>
        <div className="text-center">
          <Image
            src={
              "https://raw.githubusercontent.com/Mohammed-MI-ma/assets/main/rnpPartner.png"
            }
            preview={false}
            width={"200px"}
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
