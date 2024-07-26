import React from "react";
import { Avatar, Card, ConfigProvider, Modal, Tag, Tooltip } from "antd";
import { useSelector } from "react-redux";
import { CiSquarePlus } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import style from "./customModal.module.css";
import { familyMemebersList } from "./familyMembersList/familyMembersList";
import { CiCircleInfo } from "react-icons/ci";
import HoverableCard from "../HoverableCard";
import { bgBlocTop } from "../../images";

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
              <p>النصوص التشريعية</p>
            </address>
          </footer>
        }
      >
        <div style={{ display: "flex" }} className="flex-col sm:flex-row">
          <Card className={style.cardContainer}>
            {familyMemebersList.map((familyMember, index) => (
              <HoverableCard>
                <Card.Grid
                  className={`${style.gridStyle} border rounded mb-2 shadow-lg`}
                  key={index}
                  style={{
                    border: "1px solid var(--color-theme)",
                    borderRadius: "15px",
                    background: `url(${bgBlocTop}) -700px -100px no-repeat,  100% 100% no-repeat, linear-gradient(90deg,white 100%,var(--color-theme) 72%,white 74%, rgba(217,235,232,1) 77%,rgba(246,255,254,1) 100%)`,
                  }}
                >
                  <div className="w-full flex justify-start">
                    <Avatar
                      style={{
                        background: `url(${bgBlocTop}) -20px -50px no-repeat, url(${bgBlocTop}) 100% 100% no-repeat, linear-gradient(90deg,var(--color-theme) 100%,var(--color-theme) 72%,var(--color-theme) 74%, rgba(217,235,232,1) 77%,rgba(246,255,254,1) 100%)`,
                        cursor: "pointer",
                        minWidth: "48px",
                      }}
                      size={48}
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
                  </div>

                  <div className="w-full text-right">
                    فرص حصول عائلتك على برامج المساعدة بناءً على "{" "}
                    {lang === "ar" && familyMember.arabic}
                    {lang === "fr" && familyMember.french}" هو رب الأسرة
                  </div>
                  <div className="flex justify-end flex-col w-full">
                    <div>
                      <ol
                        style={{
                          direction: "rtl",
                          textAlign: "right",
                          fontSize: "12px",
                        }}
                      >
                        <li>
                          برنامج آمو تضامن : <Tag color="success">90%</Tag>
                        </li>
                        <li>
                          برنامج الدعم الاجتماعي المباشر :{" "}
                          <Tag color="success">120%</Tag>
                        </li>
                        <li>
                          برنامج البطالة :<Tag color="error">قريباً</Tag>
                        </li>{" "}
                        <li>
                          برنامج التقاعد :<Tag color="error">قريباً</Tag>
                        </li>
                      </ol>
                    </div>
                  </div>
                </Card.Grid>
              </HoverableCard>
            ))}
          </Card>
          <div className="w-full sm:w-[300px] flex items-center justify-center flex-col shadow">
            <div> أو جرب حصريا </div>
            <div className="w-full text-center px-3">
              <HoverableCard>
                <div
                  className="shadow-lg p-6"
                  style={{
                    borderRadius: "10px",
                    background: `url(${bgBlocTop}) -20px -50px no-repeat, url(${bgBlocTop}) 100% 100% no-repeat, linear-gradient(90deg,var(--color-theme) 100%,var(--color-theme) 72%,var(--color-theme) 74%, rgba(217,235,232,1) 77%,rgba(246,255,254,1) 100%)`,
                    color: "white",
                    fontWeight: "700",
                    width: "100%",
                  }}
                >
                  مؤشركم AI?
                </div>
              </HoverableCard>
            </div>
          </div>
        </div>
      </Modal>
    </ConfigProvider>
  );
};
export default CustomModal;
