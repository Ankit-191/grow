import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import join from "../assets/img/webp/joinUs.webp";
import like from "../assets/img/svg/like.svg";
import comment from "../assets/img/svg/chatbubble.svg";
import upload from "../assets/img/svg/upload.svg";
import journey from "../assets/img/webp/ourJourney.webp";
import Pinkbtn from "./Pinkbtn";
const View = ({ view }) => {
  return (
    <>
      <section className="py-5 my-xl-3">
        <Container className="my-xl-5 my-md-5">
          <h4 className="fs_4xl fw-normal clr_black text-center mb-xl-5">
            Let’s Take a <span className="fw-semibold">View</span>
          </h4>
          <Row className="justify-content-lg-between justify-content-center">
            <Col sm={12} className="py-md-2 py-1">
              <div className="view_border"></div>
            </Col>
            <Col md={8} lg={4}>
              <div className="overflow-hidden scal_img">
                <img src={join} alt="join" className="w-100 rounded-1" />
              </div>
            </Col>
            <Col md={8} lg={7}>
              <div className="mt-lg-0 mt-md-4 mt-3">
                <p className="fw-semibold fs_md clr_pink lh_normal mb-2 mb-lg-3 pb-sm-1 pb-lg-0">
                  July 2023
                </p>
                <h6 className="fw-semibold fs_xl clr_black mb-lg-3 pb-sm-1 pb-lg-0lh_normal">
                  Join us on our next challenge
                </h6>
                <p className="fw-normal fs_sm clr_gray mb-2 mb-lg-3 pb-sm-1 pb-lg-0">
                  Working with feedback
                </p>
                <p className="fw-normal fs_xsm clr_gray mb-2 mb-lg-3 pb-sm-1 pb-lg-0">
                  April 9 - LIOR KRENGEL
                </p>
                <a
                  href="#"
                  className="fw-semibold fs_md clr_pink text-decoration-underline lh_normal"
                >
                  Read more
                </a>
                <Row className="mt-4">
                  <Col>
                    <a
                      href="#"
                      className="fw-semibold fs_lg clr_black lh_normal icon_hover"
                    >
                      <img src={like} alt="like" />2
                    </a>
                  </Col>
                  <Col className="text-center">
                    <a href="#" className="icon_hover">
                      <img src={comment} alt="comment" />
                    </a>
                  </Col>
                  <Col className="text-end">
                    <a href="#" className="icon_hover">
                      <img src={upload} alt="upload" />
                    </a>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-lg-between justify-content-center">
            <Col sm={12} className="py-md-2 py-1">
              <div className="view_border"></div>
            </Col>
            <Col md={8} lg={4}>
              <div className="overflow-hidden scal_img">
                <img src={journey} alt="join" className="w-100 rounded-1" />
              </div>
            </Col>
            <Col md={8} lg={7}>
              <div className="view_content mt-lg-0 mt-md-4 mt-3">
                <p className="fw-semibold fs_md clr_pink lh_normal mb-2 mb-lg-3 pb-sm-1 pb-lg-0">
                  July 2023
                </p>
                <h6 className="fw-semibold fs_xl clr_black mb-lg-3 pb-sm-1 pb-lg-0 lh_normal">
                  Our journey comes to a close flipping the coin and the tools
                  we have gathered
                </h6>
                <p className="fw-normal fs_sm clr_gray mb-2 mb-lg-3 pb-sm-1 pb-lg-0">
                  Together we have spent the lst five weeks exploring and
                  practing our healthy Boundaries. We took a step back and
                  connected with our.....
                </p>
                <p className="fw-normal fs_xsm clr_gray mb-2 mb-lg-3 pb-sm-1 pb-lg-0">
                  March 15 - LIOR KRENGEL
                </p>
                <a
                  href="#"
                  className="fw-semibold fs_md clr_black text-decoration-underline lh_normal"
                >
                  Read more
                </a>
              </div>
            </Col>
          </Row>
          {view.map((data) => {
            return (
              <Row
                key={data.id}
                className="justify-content-lg-between justify-content-center"
              >
                <Col sm={12} className="py-md-2 py-1">
                  <div className="view_border"></div>
                </Col>
                <Col md={8} lg={4}>
                  <div className="overflow-hidden scal_img">
                    <img
                      src={data.img}
                      alt={data.alt}
                      className="w-100 rounded-1"
                    />
                  </div>
                </Col>
                <Col md={8} lg={7}>
                  <div className="view_content mt-lg-0 mt-md-4 mt-3">
                    <h6 className="fw-semibold fs_xl clr_black mb-lg-3 pb-sm-1 pb-lg-0 lh_normal">
                      {data.heading}
                    </h6>
                    <p className="fw-normal fs_sm clr_gray mb-2 mb-lg-3 pb-sm-1 pb-lg-0">
                      {data.para}
                    </p>
                    <p className="fw-normal fs_xsm clr_gray mb-2 mb-lg-3 pb-sm-1 pb-lg-0">
                      {data.date}
                    </p>
                    <a
                      href="#"
                      className="fw-semibold fs_md clr_black text-decoration-underline lh_normal"
                    >
                      Read more
                    </a>
                  </div>
                </Col>
              </Row>
            );
          })}
          <Row>
            <Col sm={12} className="py-md-2 py-1">
              <div className="view_border"></div>
            </Col>
          </Row>
          <div className="text-center pt-md-3 pt-1">
            <Pinkbtn pinkbtn={"View All"} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default View;
