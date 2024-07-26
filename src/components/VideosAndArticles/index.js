import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CategoriesComponent from "../CategoriesComponent";
import OurPartners from "../OurPartners";
import style from "./videoAndArticles.module.css";
const VideosAndArticles = () => {
  const language = useSelector((state) => state.application.language);

  const primaryRegularFont = `Special-Logo-${language}`;
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sectionStyle = {
    dir: language === "ar" ? "rtl" : "ltr",
    fontFamily: primaryRegularFont,
    fontSize: "var(--font-extra-large-size)",
    paddingLeft: language === "fr" ? "20px" : null,
    paddingRight: language === "ar" ? "20px" : null,
  };
  return (
    <div className={style.mainContainer}>
      <div>
        <h2
          className="h-[15%] flex items-center justify-center"
          style={{
            textAlign: "center",
            ...sectionStyle,
          }}
        >
          الأكثر قراءة
        </h2>
        <div
          className="h-[700px] bg-white px-3 "
          style={{ overflowY: "scroll" }}
        >
          <div
            style={{
              height: "200px",
              width: "100%",
              background: "var(--color-theme)",
              marginBottom: "10px",
            }}
          >
            Article1
          </div>{" "}
          <div
            style={{
              height: "200px",
              width: "100%",
              background: "var(--color-theme)",
              marginBottom: "10px",
            }}
          >
            Article1
          </div>{" "}
          <div
            style={{
              height: "200px",
              width: "100%",
              background: "var(--color-theme)",
              marginBottom: "10px",
            }}
          >
            Article1
          </div>{" "}
          <div
            style={{
              height: "200px",
              width: "100%",
              background: "var(--color-theme)",
              marginBottom: "10px",
            }}
          >
            Article1
          </div>{" "}
          <div
            style={{
              height: "200px",
              width: "100%",
              background: "gray",
              marginBottom: "10px",
            }}
          >
            Article1
          </div>{" "}
          <div
            style={{
              height: "200px",
              width: "100%",
              background: "gray",
              marginBottom: "10px",
            }}
          >
            Article1
          </div>{" "}
        </div>
      </div>
      <div>
        <div style={{ minHeight: "40px" }} className="bg-white py-20">
          <h2
            style={{
              textAlign: "center",
              ...sectionStyle,
            }}
          >
            فيديوهات توضيحية
          </h2>
          <CategoriesComponent />
        </div>
        <OurPartners />
      </div>
    </div>
  );
};

export default VideosAndArticles;
