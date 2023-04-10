import { Col, Layout, Row, Spin } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import imageUrl from "../assets/backgroundImage.png";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { LoadScript } from "@react-google-maps/api";

function Home() {
  const [siderCollapsed, setsiderCollapsed] = useState(true);
  return (
    <>
      <Layout
        style={{
          height: "100vh",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <Layout style={{ backgroundColor: "transparent" }}>
          <Header style={{ backgroundColor: "transparent" }}>
            <Row justify="space-around" align="top">
              <Col span={8}>
                <Logo />
              </Col>
              <Col span={16}>
                <Navbar />
              </Col>
            </Row>
          </Header>
          <Layout style={{ backgroundColor: "transparent" }}>
            <Row align="top">
              <Col style={{ paddingTop: "12vh" }}>
                <Sider
                  style={{ backgroundColor: "transparent" }}
                  collapsible
                  trigger={null}
                  collapsed={siderCollapsed}
                  onMouseEnter={() => setsiderCollapsed(false)}
                  onMouseLeave={() => setsiderCollapsed(true)}
                >
                  <Sidebar />
                </Sider>
              </Col>
            </Row>
            <Layout style={{ backgroundColor: "transparent", padding: "36px" }}>
              <Content>
                <Suspense fallback={<Spin />}>
                <LoadScript googleMapsApiKey={import.meta.env.VITE_API_KEY}>
                  <Outlet />
                  </LoadScript>
                </Suspense>
              </Content>

              <Footer style={{ backgroundColor: "transparent" }}></Footer>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default Home;
