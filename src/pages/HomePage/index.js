import React, { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection";
import BenefitsSubscribingComponent from "../../components/BenefitsSubscribingComponent";
import starAbstract from "../../assets/images/starAbstract.svg";
import starAbstract2 from "../../assets/images/star2Abstract.svg";

import { FcIdea } from "react-icons/fc";
import router from "../../assets/images/router.svg";
import ss from "./mockUp.png";
import style from "./homePage.module.css";
//__REACT_HELMET
import { Helmet } from "react-helmet";

//__REACT_i18N
import { useTranslation } from "react-i18next";
import OurPartners from "../../components/OurPartners";
import SubscriptionsPlan from "../../components/SubscriptionsPlan";
import { Avatar, Button, Image } from "antd";
import { bgBlocTop } from "../../images";
import CategoriesComponent from "../../components/CategoriesComponent";
import VideosAndArticles from "../../components/VideosAndArticles";

const HomePage = ({ language }) => {
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
  // Retrieve the translation function from the useTranslation hook
  const { t } = useTranslation();
  const sectionStyle = {
    dir: language === "ar" ? "rtl" : "ltr",
    fontFamily: primaryRegularFont,
    fontSize: "30px",
    paddingLeft: language === "fr" ? "20px" : null,
    paddingRight: language === "ar" ? "20px" : null,
  };
  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{t("home")}</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Calculate your eligibility for social care programs based on socio-economic declarations with the RSU Calculator. Get accurate scores and guidance for accessing social welfare benefits. Free and easy-to-use."
        />
        <meta name="keywords" content="Keywords related to your content" />
        <meta name="author" content="Morocco Innovation Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t("home")} />
        <meta
          property="og:description"
          content="Description of your website/page"
        />
        <meta property="og:url" content="URL of the page" />
        <meta property="og:image" content="URL of the image" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Add other meta tags as needed */}
      </Helmet>
      <section id={"main-content-home-page"}>
        <HeroSection />
        <VideosAndArticles />
        <SubscriptionsPlan />
        <BenefitsSubscribingComponent />
        <div
          className="bg-white py-10 relative "
          style={{
            overflow: "hidden",
            background: `url(${bgBlocTop}) -254px -67px no-repeat, url(/o/rsu_theme/images/RSU-HERO-IMAGE2.png) 100% 100% no-repeat, linear-gradient(90deg,rgba(217,235,232,1) 100%,rgba(236,246,244,1) 72%,rgba(242,242,242,1) 74%, rgba(217,235,232,1) 77%,rgba(246,255,254,1) 100%)`,
          }}
        >
          <h2
            style={{
              textAlign: "center",
              //  borderLeft: language === "fr" ? "10px solid  var(--color-red)" : null,
              //  borderRight: language === "ar" ? "10px solid var(--color-red)" : null,

              ...sectionStyle,
            }}
          >
            {t("التكوين والمفاهيم")}
          </h2>
          <div className="flex justify-around items-center  px-10 flex-col-reverse sm:flex-row">
            <Button
              size="large"
              style={{
                flex: 1,
                height: "50px",
                borderRadius: "50px",
                maxWidth: "200px",
                border: "1px solid var(--color-theme)",
                background: "var(--color-theme)",
                color: "white",
              }}
              className="w-full"
            >
              انضم إلى فريقنا ؟{" "}
            </Button>
            <h1
              style={{ fontSize: "50px" }}
              className={`${style.advantageContainer} text-right`}
            >
              :تشكيل المستقبل باستخدام علوم الحاسوب
            </h1>
          </div>
          <div className="flex justify-right items-center  px-10">
            {" "}
            <p style={{ direction: "rtl" }}>
              اكتشف كيف قام أربعة أشخاص من الرؤساء التنفيذيين <br></br>في مجال
              التكنولوجيا ببناء رؤيتهم لإنشاء برامج كخدمة (SaaS)
            </p>
            <h1 style={{ fontSize: "50px", color: " var(--color-text)" }}>
              التحليلات والابتكار
            </h1>{" "}
          </div>{" "}
          <div
            className="flex justify-right items-center  px-10 gap-5 mb-10 "
            style={{ paddingBottom: isMobile && "120px" }}
          >
            <h1 style={{ fontSize: "50px", color: " var(--color-text)" }}>
              والابتكار
            </h1>
            <Avatar src={<FcIdea size={40} />} size={"large"}></Avatar>
          </div>{" "}
          <img
            src={ss}
            className="absolute right-0 "
            style={{
              transform: "translate(-200px,-100px)",
            }}
          ></img>{" "}
          <img
            src={ss}
            className="absolute right-0 "
            style={{
              transform: "translate(50px,-200px)",
            }}
          />
        </div>{" "}
        <div
          className="flex flex-col w-full relative justify-center items-center bg-white gap-10 text-center py-20"
          style={{ minHeight: "600px" }}
        >
          {" "}
          <img
            src={starAbstract}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "translate(0,200px)",
            }}
          ></img>{" "}
          <img
            src={starAbstract}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              transform: "translate(-0,50px)",
              zIndex: 10,
            }}
          ></img>{" "}
          <img
            src={starAbstract2}
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              transform: "translate(0,0px)",
              zIndex: 10,
            }}
          ></img>
          <div>
            <div style={{ fontSize: "30px", fontFamily: primaryRegularFont }}>
              نقاط القوة
            </div>
            <div style={{ fontSize: "20px" }}>
              مع تطبيق "مؤشركم" تقدر دَخَّل الويفي، و يْخَلِّيكْ ضمن حدود
              التنقيط المزيان الخاصة بك. تبقى ليك التغطية الصحية و ال 500 درهم
            </div>
          </div>
          <img src={router} width={200}></img>{" "}
          <div style={{ maxWidth: "400px" }}>
            بفضل أنظمتنا المدربة على الذكاء الاصطناعي القوية، فإن محاكاة التقييم
            هي خدمة عالية الجودة نقدمها. نرافقك في كل خطوة تريد اتخاذها. ثق بنا،
            الأمر يستحق ذلك. ه
          </div>
          <Button
            size="large"
            style={{
              flex: 1,
              height: "50px",
              borderRadius: "50px",
              border: "1px solid var(--color-theme)",
              background: "var(--color-theme)",
              color: "white",
            }}
          >
            احصل على خط الاختبار الخاص بك مجانًا وجرب
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
