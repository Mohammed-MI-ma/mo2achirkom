import React from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";

const ActionButton = ({ size, icon, style, children, onClick }) => {
  const languag = useSelector((state) => state.application.language);

  return (
    <Button
      onClick={onClick}
      size={size}
      icon={icon}
      style={{
        ...style,
        fontFamily: `Primary-Regular-${languag}`,
        borderRadius: "0px",
        fontSize: "15px",
        fontWeight: "bold",
      }}
      className={`${languag === "ar" ? style.reverse : ""}`}
      type="primary"
    >
      {children}
    </Button>
  );
};

export default ActionButton;
