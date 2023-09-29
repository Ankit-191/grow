import React from "react";
import updated from "../assets/img/webp/updated.webp";
import { Col, Container, Row } from "react-bootstrap";
import message from "../assets/img/svg/message.svg";
import instagram from "../assets/img/svg/instagram.svg";
import linkdin from "../assets/img/svg/linkedin.svg";
const Form = () => {
  return (
    <>
      <section className="py-5" id="form">
        <Container className="py-md-5">
          <Row className=" justify-content-center">
            <Col className="position-relative" lg={7} xl={5}>
              <div className="scal_img overflow-hidden position_xl_absolute top-0 start-0 z-0">
                <img
                  src={updated}
                  alt="Work Skills"
                  className="updated_width rounded-1"
                />
              </div>
              <div className="bg_white_300 email_bg_shadow position_md_absolute bottom-0 z-3 px-md-4 px-3 py-3 rounded-1 translate_xl_middle_y start_xl_0">
                <div className="d-flex align-items-center gap-3 pt-1">
                  <a href="#">
                    <img src={message} alt="message" />
                  </a>
                  <p className="fw-normal fs_lg clr_black lh_normal mb-0">
                    Stepenjohns@gmail.com
                  </p>
                </div>
                <div className="d-flex gap-2 mt-2 py-1">
                  <a
                    href="https://www.instagram.com/"
                    target="blank"
                    className="scal_img"
                  >
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a
                    href="https://in.linkedin.com/"
                    target="blank"
                    className="scal_img"
                  >
                    <img
                      src={linkdin}
                      alt="linkdin"
                      className="transition_02"
                    />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={7} xl={7} className="ps-xl-0">
              <div className="bg_white_300 px-xl-5 px-sm-4 py-sm-4 p-3 position-relative mt-xl-5 mt-4 z-3 rounded-1 form_bg_shadow">
                <h4 className="fs_4xl fw-normal clr_black lh_normal mb-3">
                  Get <span>Updated</span> With Us
                </h4>
                <p className="fw-semibold fs_sm clr_black opacity_06">
                  The Big Oxmox advised her not to do so, because there were
                  thousands of bad Commas, wild Question Marks and devious
                  Semikoli.
                </p>
                <form method="get">
                  <Row className="pt-lg-4 flex-column flex-sm-row">
                    <Col>
                      <div className="liner_border w-100">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="fs_sm fw-normal clr_black border_bg form_input w-100 lh_normal"
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="liner_border w-100  mt-3 mt-sm-0 ">
                        <input
                          type="text"
                          placeholder="Your Email Address"
                          className="fs_sm fw-normal clr_black border_bg form_input w-100 lh_normal"
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="liner_border w-100 mt-3">
                    <textarea
                      placeholder="Message"
                      className="fs_sm fw-normal clr_black w-100 border_bg message_resize form_input lh_normal"
                    ></textarea>
                  </div>
                  <button className="fs_md fw-semibold clr_white btn_send rounded-pill bg_pink lh_normal mt-sm-4 mt-3">
                    Send Message
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Form;
