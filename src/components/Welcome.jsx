import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import welcome from "../assets/img/webp/welcome.webp";
import Pinkbtn from "./Pinkbtn";
import { WelcomeData } from "./common/Helper";
const Welcome = () => {
  return (
    <>
      <section className="py-5 my-xl-3" id="welcome">
        <Container className="py-md-5 my-xl-4">
          <Row className="justify-content-center align-items-center align-items-lg-start">
            <Col className="position-relative" lg={6} xl={6}>
              <div className="welcome_img overflow-hidden position_xl_absolute top-0 start-0 z-0">
                <img
                  src={welcome}
                  alt="Work Skills"
                  className="welcome_width rounded-1"
                />
              </div>
            </Col>
            <Col lg={6} xl={6}>
              <div className="bg_white p-sm-4 pt-4 px-3 pb-3 position-relative z-3 mt-xl-4 rounded-1">
                <h4 className="fs_4xl fw-normal clr_black mb-3 pb-md-1">
                  <span className="fw-semibold">Welcome</span> to Work Skills
                </h4>
                <ul className="welcome_circle mb-0">
                  {WelcomeData.map((data) => {
                    return (
                      <li
                        key={data.id}
                        className={`fs_sm fw-normal clr_gray ${data.spacing}`}
                      >
                        {data.content}
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-xl-5 mt-sm-4 mt-3">
                  <Pinkbtn pinkbtn={"Subscribe"} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Welcome;
