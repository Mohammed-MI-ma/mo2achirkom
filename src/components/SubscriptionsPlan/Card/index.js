import React from "react";
import style from "./Card.module.css";
import { Avatar, Button, Divider } from "antd";
import { RiNumber1 } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { FcApproval } from "react-icons/fc";
import AnimatesIcon from "../../AnimatedIcon";
import HoverableCard from "../../HoverableCard";

const Card = ({ price, specs, to, icon, title, rank, id }) => {
  const language = useSelector((state) => state.application.language);
  const { t } = useTranslation();
  const primaryRegularFont = `Special-Logo-${language}`;

  return (
    <HoverableCard>
      <div className="relative">
        <div
          className={`${style.cardShadow} shadow-lg`}
          style={{
            background: id === "2" ? "wheat" : "",
            opacity: id === "2" ? 1 : 0.1,
            border: "1px solid black",
          }}
        ></div>
        <div
          className={style.card}
          style={{ background: id === "2" ? "#1d1d1f" : "#088772" }}
        >
          <div className="flex justify-between w-full ">
            {id === "2" && (
              <div
                className="bg-white text-black rounded flex items-center justify-center shadow-lg px-10"
                style={{
                  borderRadius: "50px",
                  backgroundColor: "wheat",
                  fontWeight: "700",
                  minHeight: "40px",
                }}
              >
                شائع
              </div>
            )}
            {id !== "2" && (
              <Avatar
                icon={rank}
                style={{ color: "white" }}
                size={"large"}
                shape="square"
              />
            )}
          </div>
          <AnimatesIcon
            icon={
              <Avatar icon={icon} style={{ color: "white" }} size={"large"} />
            }
            animation={"tada"}
          />{" "}
          <strong style={{ fontSize: "30px", color: "white" }}>
            {price}
            <div style={{ fontSize: "16px", display: "flex" }}>
              <p>أسبوع</p> <p>/</p>
            </div>
          </strong>
          <Divider style={{ color: "white" }}>ميزات الباقة</Divider>
          <ol
            style={{
              color: "white",
              fontWeight: "100",
              textAlign: "center",
              fontSize: "14px",
            }}
            type="1"
          >
            <li className="flex gap-2 justify-center items-center">
              <p>الوصول إلى جميع الميزات الأساسية</p>
              <FcApproval />
            </li>
            <li className="flex gap-2 justify-center items-center">
              <p>الوصول إلى جميع الميزات الأساسية</p>
              <FcApproval />
            </li>{" "}
            <li className="flex gap-2 justify-center items-center">
              <p>الوصول إلى جميع الميزات الأساسية</p>
              <FcApproval />
            </li>{" "}
            <li className="flex gap-2 justify-center items-center">
              <p>الوصول إلى جميع الميزات الأساسية</p>
              <FcApproval />
            </li>
          </ol>
          <div>
            <Button
              size="large"
              style={{
                width: "100%",
                background: "white",
                borderRadius: "50px",
                fontWeight: "700",
              }}
              className="mt-10"
            >
              الحصول على العرض
            </Button>{" "}
            <Button
              size="large"
              style={{
                width: "100%",
                borderRadius: "50px",
                marginTop: "10px",
                fontWeight: "400",
                color: "wheat",
              }}
              className="mt-10"
            >
              احصل على مزيد من المعلومات
            </Button>
          </div>
        </div>
      </div>
    </HoverableCard>
  );
};

export default Card;
