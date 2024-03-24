import React, { useTransition } from "react";
import { Avatar, Button } from "antd";

import NavbarItems from "./NavbarItems";

import style from "./Navbar.module.css";
import InternationalizationDropDown from "../InternationalizationDropDown";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Logo } from "../../images";
import { CgMenuRightAlt } from "react-icons/cg";
import SearchInputField from "../SearchInputField";
import { setSideMenuIsOpened } from "../../reducers/applicationService/applicationSlice";
import logooo from "../../assets/images/LogoText.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const languag = useSelector((state) => state.application.language);
  const { t } = useTranslation();
  const [startTransition, isPending] = useTransition();

  const d = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={style.mainContainer}>
      <div
        className={`${style.innerContainer} ${
          languag === "ar" ? style.reverse : ""
        }`}
      >
        {/* Logo */}
        <div
          onClick={() => {
            // Navigate to the login page when the button is clicked

            navigate(`/`);
          }}
          className={`${style.logo} ${
            languag === "ar" ? style.reverse : ""
          } cursor-pointer`}
        >
          <div
            className={`flex justify-start relative flex-col items-${
              languag === "fr" ? "center" : "flex-start"
            }`}
            style={{
              fontFamily: `Primary-Regular-${languag}`,
            }}
          >
            <span
              className={`flex ${
                languag === "ar" ? "flex-row-reverse" : "flex-row"
              } justify-start relative items-center ${
                languag === "ar" ? "gap-4" : ""
              }`}
            >
              {/* Add your logo here */}
              <Avatar
                className={style.logoImage}
                src={Logo}
                shape="square"
                alt="logo"
              />
              {languag === "ar" ? (
                <h1
                  className={style.logo}
                  style={{
                    margin: "0px",
                    direction: languag === "ar" ? "rtl" : "",
                    fontFamily: `Special-Logo-${languag}`,
                  }}
                >
                  {t("Logo1")}
                </h1>
              ) : (
                <img src={logooo} alt=""></img>
              )}
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
