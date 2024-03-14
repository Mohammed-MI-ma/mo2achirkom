import React, { useEffect, useState } from "react";
import DrawerComponent from "../../DrawerComponent";
import MenuAsideComponent from "../../MenuAsideComponent";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setSideMenuIsOpened } from "../../../reducers/applicationService/applicationSlice";

const AsideMenuMobile = () => {
  const open = useSelector((state) => state.application.sideMenuIsOpened);
  const dispatch = useDispatch();
  //Translation
  const { t } = useTranslation();
  //App_Lang
  const language = useSelector((state) => state.application.language);

  const [placement, setPlacement] = useState(null);
  useEffect(() => {
    setPlacement(language === "ar" ? "right" : "left");
  }, [language]);

  const onClose = () => {
    dispatch(setSideMenuIsOpened(false));
  };
  return (
    <DrawerComponent
      open={open}
      lang={language}
      width={"100%"}
      placement={placement}
      onClose={onClose}
      title={t("services")}
    >
      <MenuAsideComponent />
    </DrawerComponent>
  );
};

export default AsideMenuMobile;
