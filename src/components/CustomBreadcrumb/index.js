import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { bgBlocTop } from "../../images";

const CustomBreadcrumb = () => {
  const location = useLocation();
  const { pathname } = location;
  // Split the pathname string by "/"
  const pathSegments = pathname.split("/");
  const { t } = useTranslation();

  // Filter out the words you want to ignore
  let filteredSegments = pathSegments.filter(
    (segment) => !["web", "guest", "ar", "fr"].includes(segment)
  );
  filteredSegments = filteredSegments.filter(
    (segment) => !["", " "].includes(segment)
  );
  // Translate each segment
  const translatedSegments = filteredSegments.map((segment) => t(segment));

  // Join the filtered segments back into a string
  const modifiedPathname = translatedSegments.join("/");
  const language = useSelector((state) => state.application.language);

  // Retrieve the translation function from the useTranslation hook
  return (
    <Breadcrumb
      style={{
        direction: language === "ar" ? "rtl" : "ltr",
        background: `url(${bgBlocTop}) -301px  -67px no-repeat, url(/o/rsu_theme/images/RSU-HERO-IMAGE2.png) 100% 100% no-repeat, linear-gradient(90deg,rgba(217,235,232,1) 100%,rgba(236,246,244,1) 72%,rgba(242,242,242,1) 74%, rgba(217,235,232,1) 77%,rgba(246,255,254,1) 100%)`,
      }}
      className="pr-5 pl-5"
      items={[
        {
          href: "",
          title: <HomeOutlined />,
        },

        {
          title: <div>{modifiedPathname}</div>,
        },
      ]}
    />
  );
};

export default CustomBreadcrumb;
