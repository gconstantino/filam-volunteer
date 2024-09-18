import React from "react";
import { Menu } from "antd";
import { MenuMode } from "rc-menu/lib/interface";

type LeftMenuProps = {
    mode: MenuMode;
}

const LeftMenu = (props:LeftMenuProps) => {
  return (
    <span style={{fontWeight: "bold", fontSize:"24px"}} >
      Filipino-American Association of Greater Columbia Volunteer Center
      </span>
  );
};

export default LeftMenu;