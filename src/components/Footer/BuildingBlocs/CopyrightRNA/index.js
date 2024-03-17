import React from "react";
import { useTranslation } from "react-i18next";

const CopyrightRNA = () => {
  const { t } = useTranslation();
  return <section>{t("CopyrightRNA")}</section>;
};

export default CopyrightRNA;
