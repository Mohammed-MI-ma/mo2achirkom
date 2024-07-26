import React from "react";
import { useSelector } from "react-redux";
import { bgBlocTop } from "../../images";
import { useTranslation } from "react-i18next";
import Card from "./Card";
import { PiPackage } from "react-icons/pi";
import { GiJetPack } from "react-icons/gi";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import HoverableCard from "../HoverableCard";
import starAbstract from "../../assets/images/starAbstract.svg";
import starAbstract2 from "../../assets/images/star2Abstract.svg";
import AnimatesIcon from "../AnimatedIcon";

const SubscriptionsPlan = () => {
  const language = useSelector((state) => state.application.language);
  const { t } = useTranslation();
  const primaryRegularFont = `Special-Logo-${language}`;

  const sectionStyle = {
    dir: language === "ar" ? "rtl" : "ltr",
    fontFamily: primaryRegularFont,
    fontSize: "30px",
    paddingLeft: language === "fr" ? "20px" : null,
    paddingRight: language === "ar" ? "20px" : null,
  };
  return (
    <section
      className={`py-10 flex flex-col items-center justify-center w-full gap-10 relative`}
      style={{
        minHeight: "384px",
        background: `url(${bgBlocTop}) -254px -67px no-repeat, url(/o/rsu_theme/images/RSU-HERO-IMAGE2.png) 100% 100% no-repeat, linear-gradient(90deg,rgba(217,235,232,1) 100%,rgba(236,246,244,1) 72%,rgba(242,242,242,1) 74%, rgba(217,235,232,1) 77%,rgba(246,255,254,1) 100%)`,
      }}
    >
      <img
        src={starAbstract}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "translate(100px,150px)",
        }}
      ></img>{" "}
      <img
        src={starAbstract}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          transform: "translate(-100px,50px)",
          zIndex: 10,
        }}
      ></img>
      <img
        src={starAbstract2}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "translate(10px,-40px)",
          zIndex: 10,
        }}
      ></img>{" "}
      <img
        src={starAbstract2}
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          transform: "translate(-200px,50px)",
          zIndex: 10,
        }}
      ></img>
      <div style={{ position: "relative", zIndex: 100 }}>
        <h2
          style={{
            textAlign: "center",
            //  borderLeft: language === "fr" ? "10px solid  var(--color-red)" : null,
            //  borderRight: language === "ar" ? "10px solid var(--color-red)" : null,

            ...sectionStyle,
          }}
        >
          {t("Plans et Tarifs")}
        </h2>{" "}
        <h3
          className="px-10 w-full"
          style={{
            textAlign: "center",
          }}
        >
          {t(
            "Choisissez le plan qui vous convient le mieux. Nos options de tarification sont flexibles et adaptées à vos besoins."
          )}
        </h3>
      </div>
      <div className="text-center">
        {" "}
        عبر
        <div className="flex gap-3 justify-center items-center">
          <HoverableCard>
            {" "}
            <div
              className="flex gap-2 border shadow-md bg-white justify-center items-center rounded"
              style={{
                borderRadius: "10px",
                backgroundColor: "var(--color-theme)",
              }}
            >
              {" "}
              <img
                src="https://www.mapexpress.ma/wp-content/uploads/2021/02/CIH-Bank.jpg"
                width={80}
                className="shadow-lg"
                style={{
                  height: "60px",
                  borderRadius: "10px",
                }}
              ></img>
              <div
                style={{ maxWidth: "25vw", fontWeight: "700", color: "white" }}
              >
                ٢٬٠٠٠ عملية شراء حتى الآن
              </div>
            </div>
          </HoverableCard>
          او
          <HoverableCard>
            <AnimatesIcon></AnimatesIcon>
            <img
              className={`animate__animated animate__tada animate__slower animate__infinite `}
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4XSc1msLK2H0ZgKEzgEmi8Xl_hVkerLYs1rNl6lloJRyNbo-Suzr9OFye2C4gRZSMXA5Chl_09ELAYqOmwKxVFXPxVYP7nzcCn8eyk1Id8tb4WQLJMhOGlq3OpjgWMUnGLy6SHAN6CA/s800/orange-money-scaled.jpg"
              width={80}
              style={{
                height: "60px",
                borderRadius: "10px",
              }}
            ></img>{" "}
          </HoverableCard>
        </div>
      </div>
      <div
        className="grid lg:grid-cols-3  sm:grid-cols-1 md:grid-cols-3 gap-10 items-center flex-grow "
        style={{ margin: "0 auto" }}
      >
        <Card
          id={"3"}
          price={
            <div style={{ fontFamily: primaryRegularFont }}>
              <span style={{ visibility: "hidden" }}>ي</span>
              &nbsp;35&nbsp;درهم مغربي&nbsp;{" "}
              <span style={{ visibility: "hidden" }}>ي</span>
            </div>
          }
          icon={<GiJetPack />}
          title={"الباقة الشركات"}
          rank={<RiNumber3 />}
        />
        <Card
          id={"2"}
          price={
            <div style={{ fontFamily: primaryRegularFont }}>
              <span style={{ visibility: "hidden" }}>ي</span>
              &nbsp;35&nbsp;درهم مغربي&nbsp;{" "}
              <span style={{ visibility: "hidden" }}>ي</span>
            </div>
          }
          icon={<PiPackage />}
          title={"الباقة الاحترافية"}
          rank={<RiNumber2 />}
        />
        <Card
          id={"1"}
          price={
            <div style={{ fontFamily: primaryRegularFont }}>
              <span style={{ visibility: "hidden" }}>ي</span>
              &nbsp;35&nbsp;درهم مغربي&nbsp;{" "}
              <span style={{ visibility: "hidden" }}>ي</span>
            </div>
          }
          icon={<GiJetPack />}
          title={"الباقة الأساسية"}
          rank={<RiNumber1 />}
        />
      </div>
    </section>
  );
};

export default SubscriptionsPlan;
