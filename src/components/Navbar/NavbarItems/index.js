import React from "react";
import { useTranslation } from "react-i18next";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import style from "./NavbarItems.module.css";
import menuItems from "./menuItems"; // Import menuItems

// Dropdown component for individual menu items
const DropdownMenu = ({ title, submenus, t }) => {
  const menu = (
    <Menu>
      {submenus.map((submenu, index) => (
        <Menu.Item key={`${title}-${index}`}>{t(submenu)}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <span>
        {t(title)} <DownOutlined />
      </span>
    </Dropdown>
  );
};

// Main NavbarItems component
const NavbarItems = () => {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      {menuItems.map((menuItem, index) => (
        <DropdownMenu
          open={true}
          key={index}
          title={menuItem.title}
          submenus={menuItem.submenus}
          t={t}
        />
      ))}
    </div>
  );
};

export default NavbarItems;
