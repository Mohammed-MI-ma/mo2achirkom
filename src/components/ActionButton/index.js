import React from "react";
import { Button, Tooltip } from "antd";
import { useSelector } from "react-redux";

const ActionButton = ({
  size,
  icon,
  style,
  children,
  onClick,
  title,
  color,
}) => {
  const languag = useSelector((state) => state.application.language);

  return (
    <Tooltip
      title={
        title && (
          <p style={{ fontFamily: `Primary-Regular-${languag}` }}>{title}</p>
        )
      }
    >
      <Button
        onClick={onClick}
        size={size}
        icon={icon}
        style={{
          ...style,
          fontFamily: `Primary-Regular-${languag}`,
          fontSize: "var(--font-small-size)",
          backgroundColor: color,
          fontWeight: "bold",
          textAlign: `${languag === "ar" ? "right" : "left"}`,
        }}
        className={`${languag === "ar" ? style.reverse : ""}`}
        type="primary"
      >
        {children}
      </Button>
    </Tooltip>
  );
};

export default ActionButton;
