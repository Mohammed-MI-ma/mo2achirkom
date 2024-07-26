import React from "react";
import { useTranslation } from "react-i18next";
import HorizontalScroll from "../HorizontalScroll";
import style from "./CategoriesComponent.module.css";
const CategoriesComponent = () => {
  const { t } = useTranslation();

  return (
    <section
      className={`bg-cover relative flex items-center justify-center flex-col-reverse lg:flex-row items-center w-full ${style.categoriesComponent}`}
    >
      <HorizontalScroll />
    </section>
  );
};

export default CategoriesComponent;
