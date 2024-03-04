import React, { useState } from "react";
import { Switch, message } from "antd";
import { MdOutlineModeNight } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import NavbarItems from "./NavbarItems";

import style from "./Navbar.module.css";
import { FaRegCopyright } from "react-icons/fa";
import { Divider } from "antd";
import InternationalizationDropDown from "../InternationalizationDropDown";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  // State to manage the switch checked status and message API
  const [isChecked, setIsChecked] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const languag = useSelector((state) => state.application.language);
  const { t } = useTranslation();
  // Function to handle switch toggle
  const onChange = (checked) => {
    // Configuration for the success message based on switch state
    const config = isChecked
      ? {
          content: "Mode sombre activé", // Message content for light mode
          rtl: true, // Right-to-left direction for message display
        }
      : {
          content: "Mode clair activé", // Message content for dark mode
          rtl: true, // Right-to-left direction for message display
        };

    // Show success message and update switch state
    messageApi.success(config);
    setIsChecked(checked);
  };

  return (
    <div className={style.mainContainer}>
      <div
        className={`${style.innerContainer} ${
          languag === "ar" ? style.reverse : ""
        }`}
      >
        {/* Logo */}
        <div
          className={`${style.logo} ${languag === "ar" ? style.reverse : ""}`}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              position: "relative",
              alignItems: languag === "ar" ? "flex-end" : "start",
              flexDirection: "column",
              fontFamily: "Primary-Regular",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "start",
                position: "relative",
                alignItems: languag === "ar" ? "flex-end" : "start",
                flexDirection: languag === "ar" ? "row-reverse" : "row",
                fontFamily: "Primary-Regular",
                gap: "10px",
              }}
            >
              {/* Add your logo here */}
              {t("Logo")}
              <sup>
                <FaRegCopyright size={10} />
              </sup>
            </span>
            <span style={{ fontSize: "12px" }}>
              {/* Add your logo here */}
              في لحظة: محاكاة، الحصول على درجة، النجاح{" "}
            </span>
          </div>{" "}
          <Divider type="vertical" />
          <div style={{ visibility: "hidden" }}>
            {" "}
            {/* Add your logo here */}
            mu2achirkom
          </div>
        </div>
        <div
          style={{
            width: "50vw",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {/* Navbar items */}
          <div className={style.navbarItems}>
            <NavbarItems />
          </div>
          {/* Tools section */}
          <div className={style.tools}>
            {/* Message context holder */}
            {contextHolder}
            {/* Switch component for toggling light/dark mode */}

            <InternationalizationDropDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
