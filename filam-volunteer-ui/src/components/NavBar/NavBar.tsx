import { MenuOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu } from "antd";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import "./NavBar.css";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  // If you do not want to auto-close the mobile drawer when a path is selected
  // Delete or comment out the code block below
  // From here
  let { pathname: location } = useLocation();
  useEffect(() => {
    setVisible(false);
  }, [location]);
  // Upto here

  return (
    <nav className="navbar">
      <Layout>
        <Layout.Header className="nav-header">
          <div className="logo">
            <img src="../../images/logo.png" />
            <div className="brand">FAAGC</div>
          </div>
          <div className="navbar-menu">
            <div className="leftMenu">
              <LeftMenu mode={"horizontal"} />
            </div>
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <div className="rightMenu">
              <RightMenu mode={"horizontal"} />
            </div>

            <Drawer
              title={"Brand Here"}
              placement="right"
              closable={true}
              onClose={showDrawer}
              open={visible}
              style={{ zIndex: 99999 }}
            >
              <RightMenu mode={"inline"} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default NavBar;
