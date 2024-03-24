import { Button } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { MdCancel } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CancelButton = () => {
  // Retrieve the currently selected language from the application state
  const language = useSelector((state) => state.application.language);
  // useNavigate hook returns a function to navigate between routes in the application.
  const navigate = useNavigate();
  const { t } = useTranslation();
  const cancelStyle = {
    backgroundColor: "var(--color-gray)",
    height: "2.5rem",
  };
  return (
    <Button
      onClick={() => navigate(`/${language}/web/guest/acceuil`)}
      icon={<MdCancel />}
      type="text"
      style={cancelStyle}
      className={`flex justify-center items-center uppercase text-black text-sm rounded-md shadow-none outline-none `}
    >
      {t("cancel")}
    </Button>
  );
};

export default CancelButton;
