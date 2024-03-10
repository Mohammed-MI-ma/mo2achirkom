import React from "react";
import { Col, Row } from "antd";
import AvantageComponent from "../AvantageComponent";
import CarouselComponent from "../CarouselComponent";
import style from "./BenefitsSubscribingComponent.module.css";
const BenefitsSubscribingComponent = () => {
  return (
    <section>
      <Row>
        <Col
          className={style.carouselHolder}
          xs={{
            flex: "100%",
          }}
          sm={{
            flex: "100%",
          }}
          md={{
            flex: "50%",
          }}
          lg={{
            flex: "50%",
          }}
          xl={{
            flex: "50%",
          }}
        >
          <CarouselComponent />{" "}
        </Col>
        <Col
          xs={{
            flex: "100%",
          }}
          sm={{
            flex: "100%",
          }}
          md={{
            flex: "50%",
          }}
          lg={{
            flex: "50%",
          }}
          xl={{
            flex: "50%",
          }}
        >
          <AvantageComponent />
        </Col>
      </Row>
    </section>
  );
};

export default BenefitsSubscribingComponent;
