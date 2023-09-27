import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import welcome from "../assets/img/webp/welcome.webp";
import Pinkbtn from "./Pinkbtn";
const Welcome = () => {
  return (
    <>
      <section className="py-5">
        <Container className="py-5 my-4">
          <Row>
            <Col className="position-relative" xl={6}>
              <div className="welcome_img overflow-hidden position_xl_absolute top-0 start-0 z-0">
                <img
                  src={welcome}
                  alt="Work Skills"
                  className="welcome_width"
                />
              </div>
            </Col>
            <Col xl={6}>
              <div className="bg_white p-4 position-relative z-3 mt-xl-4">
                <h4 className="fs_4xl fw-normal clr_black mb-3 pb-1">
                  <span className="fw-semibold">Welcome</span> to Work Skills
                </h4>
                <ul className="welcome_circle">
                  <li className="fs_sm fw-normal clr_gray">
                    Work Skills is built for young professionals who want to
                    enhance their soft skills to overcome the challenges they
                    often face during the early first years of work.
                  </li>
                  <li className="fs_sm fw-normal clr_gray my-3">
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
                <div className="mt-5">
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
