import React from "react";
import updated from "../assets/img/webp/updated.webp";
import { Col, Container, Row } from "react-bootstrap";
import message from "../assets/img/svg/message.svg";
import instagram from "../assets/img/svg/instagram.svg";
import linkdin from "../assets/img/svg/linkedin.svg";
const Form = () => {
  return (
    <>
      <section className="py-5 my-xl-0" id="form">
        <Container className="py-md-5 my-xl-0">
          <Row className=" justify-content-center">
            <Col className="position-relative" lg={7} xl={5}>
              <div className="scal_img overflow-hidden position_xl_absolute top-0 start-0 z-0">
                <img
                  src={updated}
                  alt="Work Skills"
                  className="updated_width rounded-1"
                />
              </div>
              <div className="bg_white position_md_absolute bottom-0 z-3 px-md-4 px-3 py-3 rounded-1 translate_xl_middle_y start_xl_0">
                <div className="d-flex align-items-center gap-3 pt-1">
                  <a href="#">
                    <img src={message} alt="message" />
                  </a>
                  <p className="fw-normal fs_lg clr_black lh_normal mb-0">
                    Stepenjohns@gmail.com
                  </p>
                </div>
                <div className="d-flex gap-2 mt-2 py-1">
                  <a href="https://www.instagram.com/" target="blank">
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a href="https://in.linkedin.com/" target="blank">
                    <img src={linkdin} alt="linkdin" />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={7} xl={7} className="ps-xl-0">
              <div className="bg_white px-xl-5 px-sm-4 py-sm-4 p-3 position-relative mt-xl-5 mt-4 z-3 rounded-1">
                <h4 className="fs_4xl fw-normal clr_black lh_normal mb-3">
                  Get <span>Updated</span> With Us
                </h4>
                <p className="fw-semibold fs_sm clr_black opacity_06">
                  The Big Oxmox advised her not to do so, because there were
                  thousands of bad Commas, wild Question Marks and devious
                  Semikoli.
                </p>
                <form action="" method="get">
                  <Row className="pt-lg-4 flex-column flex-sm-row">
                    <Col>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="fs_sm fw-normal clr_black opacity-50 form_input w-100 lh_normal"
                      />
                    </Col>
                    <Col>
                      <input
                        type="text"
                        placeholder="Your Email Address"
                        className="fs_sm fw-normal clr_black opacity-50 form_input w-100 lh_normal mt-3 mt-sm-0"
                      />
                    </Col>
                  </Row>
                  <textarea
                    placeholder="Message"
                    className="fs_sm fw-normal clr_black opacity-50 w-100 message_resize form_input mt-3 lh_normal"
                  ></textarea>
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
