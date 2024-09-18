import React from "react";
import {
  CalendarOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
  TeamOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import JobsPage from "./pages/Jobspage";
import HomePage from "./pages/HomePage/HomePage";
import type { MenuProps } from "antd";
import NavBar from "./components/NavBar/NavBar";
import { FeaturedVolunteer } from "./components/FeaturedVolunteer/FeaturedVolunteer";
import EventsPage from "./pages/EventsPage/EventsPage";
import VolunteerOpportunitiesPage from "./pages/VolunteerOpportunitiesPage/VolunteerOpportunitiesPage";




type MenuItem = Required<MenuProps>["items"][number];

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  type NewType = MenuItem;

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: NewType[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem(<Link to="/">Home</Link>, "home", <HomeOutlined />),

    getItem(<Link to="/events">Events</Link>, "Events", <CalendarOutlined/>),

    getItem(<Link to="/volunteerOpportunities">Volunteer Opportunities</Link>, "volunteer opportunities", <UserAddOutlined/>),

    getItem(<Link to="/events">Committees</Link>, "committees", <TeamOutlined />),

    getItem(<Link to="/events">Help</Link>, "help", <QuestionCircleOutlined />),
  ];

  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    height: 150,
    paddingInline: 10,
    lineHeight: "64px",
    backgroundColor: colorBgContainer,
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <NavBar />
      <Layout>
        <Sider
          theme="light"
          collapsedWidth="0"
          width={250}
        >
          <Menu mode="inline" defaultSelectedKeys={["4"]} items={items} />
          <FeaturedVolunteer />
        </Sider>

        <Layout>
          <Content
            style={{
              margin: "24px 16px 0",
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/events/:id/jobs" element={<JobsPage />} />
              <Route path="/volunteerOpportunities" element={<VolunteerOpportunitiesPage />} />
              
              <Route path="/events/" element={<EventsPage />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
