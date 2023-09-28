import React from "react";
import updated from "../assets/img/webp/updated.webp";
import { Col, Container, Row } from "react-bootstrap";
const Form = () => {
  return (
    <>
      <section className="py-5 my-xl-3">
        <Container className="py-md-5 my-xl-4">
          <Row className=" justify-content-center">
            <Col className="position-relative" lg={7} xl={5}>
              <div className="scal_img overflow-hidden position_xl_absolute top-0 start-0 z-0">
                <img
                  src={updated}
                  alt="Work Skills"
                  className="updated_width rounded-1"
                />
              </div>
            </Col>
            <Col lg={7} xl={7}>
              <div className="bg_white p-md-4 px-2 pt-4 pb-2 position-relative z-3 rounded-1">
                <h4 className="fs_4xl fw-normal clr_black lh_normal mb-3">
                  Get <span>Updated</span> With Us
                </h4>
                <p className="fw-semibold fs_sm clr_black opacity_06">
                  The Big Oxmox advised her not to do so, because there were
                  thousands of bad Commas, wild Question Marks and devious
                  Semikoli.
                </p>
                <form action="" method="get">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="fs_sm fw-normal clr_black opacity-50 form_input"
                  />
                  <input
                    type="text"
                    placeholder="Your Email Address"
                    className="fs_sm fw-normal clr_black opacity-50 form_input"
                  />
                  <textarea placeholder="Message" className="fs_sm fw-normal clr_black opacity-50 w-100 message_resize form_input"></textarea>
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
