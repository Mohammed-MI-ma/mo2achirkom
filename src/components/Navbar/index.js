import React from "react";
import { Avatar, Button } from "antd";

import NavbarItems from "./NavbarItems";

import style from "./Navbar.module.css";
import { FaRegCopyright } from "react-icons/fa";
import InternationalizationDropDown from "../InternationalizationDropDown";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Logo } from "../../images";
import { CgMenuRightAlt } from "react-icons/cg";
import SearchInputField from "../SearchInputField";
import { setSideMenuIsOpened } from "../../reducers/applicationService/applicationSlice";

const Navbar = () => {
  const languag = useSelector((state) => state.application.language);
  const { t } = useTranslation();
  const d = useDispatch();
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
              fontFamily: "Primary-Regular-ar",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "start",
                position: "relative",
                alignItems: "center",
                flexDirection: languag === "ar" ? "row-reverse" : "row",
                gap: "10px",
              }}
            >
              {/* Add your logo here */}
              <Avatar
                className={style.logoImage}
                src={Logo}
                shape="square"
                alt="logo"
              />
              <h1
                style={{
                  margin: "0px",
                  direction: languag === "ar" ? "rtl" : "",
                  fontFamily: `Special-Logo-${languag}`,
                }}
              >
                {t("Logo")}
              </h1>
              <sup>
                <FaRegCopyright size={10} />
              </sup>
            </span>
            <span
              style={{
                fontSize: "10px",
                direction: languag === "ar" ? "rtl" : "",
              }}
            >
              {/* Add your logo here */}
              {t("Slogan")}
            </span>
          </div>{" "}
        </div>
        <div
          className={style.myContainer}
          style={{
            width: "50vw",
            display: "flex",
            flexDirection: languag === "ar" ? "row-reverse" : "row",
            gap: "10px",
          }}
        >
          {/* Navbar items */}
          <div className={style.navbarItems}>
            <NavbarItems />
          </div>
          {/* Tools section */}
          <div className={style.tools}>
            <InternationalizationDropDown /> &nbsp;&nbsp;
            <SearchInputField />
          </div>
        </div>
      </div>
      <div className={style.onMobileViewExtraMenu}>
        {/* <!-- button humburger -->*/}
        <SearchInputField />
        <Button
          icon={<CgMenuRightAlt />}
          onClick={() => d(setSideMenuIsOpened(true))}
        />
      </div>
    </div>
  );
};

export default Navbar;
