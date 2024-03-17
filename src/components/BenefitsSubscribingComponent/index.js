import React from "react";
import AvantageComponent from "../AvantageComponent";
import CarouselComponent from "../CarouselComponent";
import { useSelector } from "react-redux";
const BenefitsSubscribingComponent = () => {
  const language = useSelector((state) => state.application.language);

  return (
    <section
      className={`flex flex-col-reverse lg:flex-row items-center ${
        language === "fr" ? "lg:flex-row-reverse" : ""
      }`}
      style={{
        minHeight: "384px",
      }}
    >
      <div className="lg:w-1/2  p-4">
        <CarouselComponent />
      </div>

      <div className="lg:w-1/2  p-4">
        <AvantageComponent language={language} />
      </div>
    </section>
  );
};

export default BenefitsSubscribingComponent;
