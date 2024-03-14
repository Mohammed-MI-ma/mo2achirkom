import React from "react";
import HeroSection from "../../components/HeroSection";
import BenefitsSubscribingComponent from "../../components/BenefitsSubscribingComponent";

//__REACT_HELMET
import { Helmet } from "react-helmet";

//__REACT_i18N
import { useTranslation } from "react-i18next";

const HomePage = ({ language }) => {
  // Retrieve the translation function from the useTranslation hook
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{t("home")}</title>
        {/* Add other meta tags as needed */}
      </Helmet>
      <section style={{ flex: "1 1 auto" }}>
        <section id={"main-content"}>
          <HeroSection />
        </section>
        <section style={{ flex: "1 1 auto" }}>
          <div id={"Pros_and_cons_of_subscribing_to_RSU.ma"}>
            <BenefitsSubscribingComponent />
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
