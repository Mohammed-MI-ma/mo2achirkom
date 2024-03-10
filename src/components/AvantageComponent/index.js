import React from "react";
import style from "./avantageComponent.module.css";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { bgBlocTop } from "../../images";
const AvantageComponent = () => {
  const language = useSelector((state) => state.application.language);
  const { t } = useTranslation();
  return (
    <div
      id="avantageComponent"
      className={style.avantageComponent}
      style={{
        paddingLeft: "0",
        paddingRight: "15px",
        direction: language === "ar" ? "rtl" : "ltr",
        fontFamily: "Primary-Regular-ar",
        background: `url(${bgBlocTop})`,
      }}
    >
      <h3>{t("MenageAccount")}</h3>
      <h2>{t("avantageSubscribing")}</h2>
      <p>التسجيل عبر الأنترنت بسيط ويوفر مجموعة من الإيجابيات</p>
      <ul>
        <li>التسجيل بدون الحاجة لتقديم وثائق مبررة</li>
        <li>فضاء مخصص للأسرة عبر الأنترنت</li>
        <li>العديد من الخدمات المتوفرة عبر الأنترنت</li>
      </ul>
      {/* Meta Tags */}
      <meta
        name="description"
        content="Discover the advantages of subscribing to our service. Get exclusive access to premium content, regular updates, and special discounts."
      />
      <meta
        name="keywords"
        content="subscription benefits, premium content, updates, discounts"
      />
    </div>
  );
};

export default AvantageComponent;
