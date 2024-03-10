import { ConfigProvider, Drawer } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const DrawerComponent = ({ children, open, placement, onClose, title }) => {
  const language = useSelector((state) => state.application.language);

  const drawerStyles = {
    body: {
      padding: "0px",
    },
  };
  return (
    <ConfigProvider
      drawer={{
        styles: drawerStyles,
      }}
    >
      <Drawer
        closable
        title={
          <div style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
            {title}
          </div>
        }
        placement={placement}
        onClose={onClose}
        open={open}
        key={placement}
      >
        {children}
      </Drawer>
    </ConfigProvider>
  );
};

export default DrawerComponent;
