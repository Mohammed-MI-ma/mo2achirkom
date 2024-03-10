import React from "react";
import { GrLanguage } from "react-icons/gr";
import { ReactSVG } from "react-svg";
import fr from "../../assets/images/fr.svg";
import ma from "../../assets/images/ma.svg";
import { useTranslation } from "react-i18next";
import { FaUser } from "react-icons/fa";
import { Dropdown } from "antd";
import { useDispatch } from "react-redux";
import {
  setLanguage,
  setSiteDirection,
} from "../../reducers/applicationService/applicationSlice";
import { useNavigate } from "react-router-dom";

const InternationalizationDropDown = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      icon: <ReactSVG src={ma} />,
      label: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => {
            changeLanguage("ar");
          }}
        >
          <span style={{ fontFamily: "Primary-Regular-ar" }}>
            {t("arabic")}
          </span>
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
          <span style={{ fontFamily: "Primary-Regular-ar" }}>
            {" "}
            {t("french")}
          </span>
        </div>
      ),
    },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    dispatch(setLanguage(lng));
    dispatch(setSiteDirection(lng === "ar" ? "rtl" : "ltr"));

    navigate("/", { replace: true }); // Navigate to the root URL without adding to history
    navigate(`/${lng}/web/guest/accueil`);
  };

  return (
    <Dropdown.Button
      type="text "
      arrow={true}
      menu={{ items }}
      icon={<GrLanguage style={{ cursor: "pointer" }} />}
    >
      <FaUser />
    </Dropdown.Button>
  );
};

export default InternationalizationDropDown;
