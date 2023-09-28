import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import welcome from "../assets/img/webp/welcome.webp";
import Pinkbtn from "./Pinkbtn";
const Welcome = () => {
  return (
    <>
      <section className="py-5 my-xl-3">
        <Container className="py-md-5 my-xl-4">
          <Row className=" justify-content-center">
            <Col className="position-relative" lg={7} xl={6}>
              <div className="welcome_img overflow-hidden position_xl_absolute top-0 start-0 z-0">
                <img
                  src={welcome}
                  alt="Work Skills"
                  className="welcome_width"
                />
              </div>
            </Col>
            <Col lg={7} xl={6}>
              <div className="bg_white p-sm-4 pt-4 px-3 pb-3 position-relative z-3 mt-xl-4 rounded-1">
                <h4 className="fs_4xl fw-normal clr_black mb-3 pb-md-1">
                  <span className="fw-semibold">Welcome</span> to Work Skills
                </h4>
                <ul className="welcome_circle mb-0 ps-3">
                  <li className="fs_sm fw-normal clr_gray">
                    Work Skills is built for young professionals who want to
                    enhance their soft skills to overcome the challenges they
                    often face during the early first years of work.
                  </li>
                  <li className="fs_sm fw-normal clr_gray my-md-3 my-2 py-sm-1">
                    In a practical and growth-oriented approach, we help young
                    professionals develop and strengthen essential skills such
                    as boundaries-setting, communication, adaptability, and
                    others.
                  </li>
                  <li className="fs_sm fw-normal clr_gray">
                    In this way, we aim to empower young professionals to
                    navigate their careers with confidence and success.
                  </li>
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
