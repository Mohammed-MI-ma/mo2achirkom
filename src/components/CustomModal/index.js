import React from "react";
import { Avatar, Card, ConfigProvider, Modal, Tooltip } from "antd";
import { useSelector } from "react-redux";
import { CiSquarePlus } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import style from "./customModal.module.css";
import { familyMemebersList } from "./familyMembersList/familyMembersList";
import { CiCircleInfo } from "react-icons/ci";
import { GrStatusGood } from "react-icons/gr";

const CustomModal = ({ open, close }) => {
  //TRALTATION
  const { t } = useTranslation();
  const lang = useSelector((state) => state.application.language);

  //__SITE DIRECTION: RTL or LTR
  const siteDir = useSelector((state) => state.application.siteDirection);

  //__SITE FONT_REGULAR:  FRENCH, ARABIC
  const siteFontReg = useSelector(
    (state) => state.application.sitePrimaryFontRegular
  );

  const modalStyles = {
    header: {
      borderRight: `5px solid var(--color-theme)`,
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    body: {
      borderRadius: 5,
      width: "100%",
    },
    mask: {
      backdropFilter: "blur(10px)",
    },
    footer: {
      borderTop: "1px solid #333",
    },
    content: {
      boxShadow: "0 0 30px #999",
    },
  };

  return (
    <ConfigProvider
      modal={{
        styles: modalStyles,
      }}
    >
      <Modal
        style={{
          direction: siteDir,
          fontFamily: siteFontReg,
        }}
        className={style.modalContainer}
        title={
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Tooltip title="sdqsdqsd">
                <CiCircleInfo />
              </Tooltip>
              <h1 className={style.headerTitle}>{t("chooseChefMenage")}</h1>
            </div>
            <p className={style.chooseChefMenageDescription}>
              {t("chooseChefMenageDescription")}
            </p>
          </section>
        }
        open={open}
        closable
        onOk={() => close()}
        onCancel={close}
        footer={
          <footer style={{ display: "flex", justifyContent: "space-between" }}>
            <nav style={{ display: "flex", gap: "10px" }}>
              <p>النصوص التشريعية</p>
              <p>إشعارات قانونية</p>
              <p>النصوص التشريعية</p>
            </nav>
            <address>
              {" "}
              <p>النصوص التشريعية</p>
            </address>
          </footer>
        }
      >
        <div style={{ display: "flex" }}>
          <section className={style.doUKnow}>
            <h1 className={style.headerTitle}>
              <GrStatusGood />
              {t("DoUKnow")}
            </h1>
            <p>{t("tip1")}</p>
          </section>

          <Card className={style.cardContainer}>
            {familyMemebersList.map((familyMember, index) => (
              <Card.Grid className={style.gridStyle} key={index}>
                <Avatar
                  style={{
                    background: "var(--color-theme)",
                    cursor: "pointer",
                  }}
                  size={{
                    xs: 24,
                    sm: 32,
                    md: 40,
                    lg: 64,
                    xl: 64,
                    xxl: 64,
                  }}
                >
                  <>
                    <p
                      style={{
                        direction: siteDir,
                        fontFamily: siteFontReg,
                      }}
                    >
                      {lang === "ar" && familyMember.arabic}
                      {lang === "fr" && familyMember.french}
                    </p>
                  </>
                </Avatar>
              </Card.Grid>
            ))}
            <Card.Grid className={style.gridStyle}>
              <Avatar
                size={{
                  xs: 24,
                  sm: 32,
                  md: 40,
                  lg: 64,
                  xl: 64,
                  xxl: 64,
                }}
                icon={<CiSquarePlus />}
              />
            </Card.Grid>
          </Card>
        </div>
      </Modal>
    </ConfigProvider>
  );
};
export default CustomModal;
