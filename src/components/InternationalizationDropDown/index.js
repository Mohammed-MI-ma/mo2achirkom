import React from "react";
import { GrLanguage } from "react-icons/gr";
import { ReactSVG } from "react-svg";
import fr from "../../assets/images/fr.svg";
import ma from "../../assets/images/ma.svg";
import { useTranslation } from "react-i18next";
import i18n from "i18next"; // Import the i18n instance to change the language

import { Dropdown } from "antd";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../reducers/applicationService/applicationSlice";

const InternationalizationDropDown = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const items = [
    {
      key: "1",
      icon: <ReactSVG src={ma} />,
      label: (
        <div
          onClick={() => {
            changeLanguage("ar");
          }}
        >
          <span style={{ fontFamily: "Primary-Regular" }}> {t("arabic")}</span>
        </div>
      ),
    },
    {
      key: "2",
      icon: <ReactSVG src={fr} />,
      label: (
        <div
          onClick={() => {
            changeLanguage("fr");
          }}
        >
          <span style={{ fontFamily: "Primary-Regular" }}> {t("french")}</span>
        </div>
      ),
    },
  ];
  const handleMenuClick = (e) => {
    console.log("click", e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    dispatch(setLanguage(lng));
  };
  return (
    <Dropdown.Button
      arrow={true}
      menu={menuProps}
      icon={<GrLanguage style={{ cursor: "pointer" }} />}
    ></Dropdown.Button>
  );
};

export default InternationalizationDropDown;
