import { Row, Col, Card } from "antd";
import { FeaturedVolunteer } from "../../components/FeaturedVolunteer/FeaturedVolunteer";
import AboutUs from "./components/AboutUs";
import FeaturedPictureCarousel from "./components/FeaturedPictureCarousel";
import SignUp from "./components/SignUp";
import UpcomingEvents from "./components/UpcomingEvents";


function HomePage() {
  return (
    <>
      <Row>
        <Col span={24} style={{alignItems: "center"}}>
          <div style={{display: "flex",  alignItems: "center",  justifyContent: "center"}}>
            <img
              src="../../images/logo.png"
              style={{ display: "inline-block", width: "100px" }}
            />
            <div style={{verticalAlign: "top"}}>
              <h2
                style={{
                  fontSize: "2vw",
                  
                }}
              >
                Welcome to FAAGC Volunteer Center
              </h2>
              <h2 style={{ margin: "auto 0", color: "blue"}}>
                "Together, We Make a Difference."
              </h2>
              <br></br>
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={14}>
          <FeaturedPictureCarousel />
        </Col>
        <Col span={10}>
          <UpcomingEvents/>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col span={14}>
        <AboutUs />
        </Col>
        <Col span={10}>
        <SignUp/>
        </Col>
      </Row>
    </>
  );
}

export default HomePage;
