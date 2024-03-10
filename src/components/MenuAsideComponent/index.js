import { AiOutlineHome } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { IoFootsteps } from "react-icons/io5";

import { Menu } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const MenuAsideComponent = () => {
  const language = useSelector((state) => state.application.language);
  const { t } = useTranslation();
  const items = [
    getItem(t("home"), "sub1", <AiOutlineHome />, [
      getItem(t("About Us"), "1"),
    ]),
    getItem(t("services"), "sub2", <GrServices />, [
      getItem(t("Score Simulation"), "2"),
      getItem(t("Score Optimization Tips"), "3"),
      getItem(t("Program Guidance"), "4"),
      getItem(t("Score Tracking"), "5"),
    ]),
    getItem(t("procedures"), "sub3", <IoFootsteps />, [
      getItem(t("How2CreateAccount"), "6"),
      getItem(t("Simulation"), "7"),
    ]),
    {
      type: "divider",
    },
  ];
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: "100%",
        direction: language === "ar" ? "rtl" : "ltr",
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default MenuAsideComponent;
