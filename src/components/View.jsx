import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import like from "../assets/img/svg/like.svg";
import comment from "../assets/img/svg/chatbubble.svg";
import upload from "../assets/img/svg/upload.svg";
const View = ({ view }) => {
  return (
    <>
      <section className="pt-5 pb-5 pb-xl-2 my-xl-3" id="view_section">
        <Container className="my-xl-5 my-md-5">
          <h4 className="fs_4xl fw-normal clr_black text-center mb-xl-5">
            Let’s Take a <span className="fw-semibold">View</span>
          </h4>
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
                    <p
                      className={`fw-semibold fs_md clr_pink lh_normal d_none ${data.year}`}
                    >
                      July 2023
                    </p>
                    <h6
                      className={`fw-semibold fs_xl clr_black lh_normal ${data.spancing}`}
                    >
                      {data.heading}
                    </h6>
                    <p className={`fw-normal fs_sm clr_gray ${data.spancing}`}>
                      {data.para}
                    </p>
                    <p className={`fw-normal fs_xsm clr_gray ${data.spancing}`}>
                      {data.date}
                    </p>
                    <a
                      href="#"
                      className={`fw-semibold fs_md clr_black text-decoration-underline lh_normal read_more_btn transition_02 ${data.clrBtn}`}
                    >
                      Read more
                    </a>
                    <Row className={`mt-3 d_none ${data.icons}`}>
                      <Col>
                        <a
                          href="#"
                          className="fw-semibold fs_lg clr_black lh_normal icon_hover"
                        >
                          <img
                            src={like}
                            alt="like"
                            className="transition_02"
                          />
                          2
                        </a>
                      </Col>
                      <Col className="text-center">
                        <a href="#" className="icon_hover">
                          <img
                            src={comment}
                            alt="comment"
                            className="transition_02"
                          />
                        </a>
                      </Col>
                      <Col className="text-end">
                        <a href="#" className="icon_hover">
                          <img
                            src={upload}
                            alt="upload"
                            className="transition_02"
                          />
                        </a>
                      </Col>
                    </Row>
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
            <button className="fs_md fw-semibold clr_white btn_pink rounded-pill bg_pink veiw_btn">
              View All
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default View;
