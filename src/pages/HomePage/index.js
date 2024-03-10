import React from "react";
import HeroSection from "../../components/HeroSection";
import BenefitsSubscribingComponent from "../../components/BenefitsSubscribingComponent";

const HomePage = () => {
  return (
    <>
      <section style={{ flex: "1 1 auto" }}>
        <div id={"main-content"}>
          <HeroSection />
        </div>
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
