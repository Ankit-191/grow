import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Frequently = () => {
  return (
    <>
      <section className="my-5 py-5">
        <Container className="mb-5">
          <h4 className="ff_outfit fs_5xl mb-4 pb-3 text-center">
            Frequently Asked Questions
          </h4>
          <Accordion defaultActiveKey="0">
            <Accordion.Item
              eventKey="0"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
            >
              <Accordion.Header>What products can I scan?</Accordion.Header>
              <Accordion.Body>
                <p className="ff_outfit fw-normal clr_primary_black opacity-75 mb-0 mw_758">
                  You can scan any product with a barcode before you recycle, no
                  matter what it’s made of. Cloopp rewards you for your positive
                  actions!
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="1"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
            >
              <Accordion.Header>Where can I use my rewards?</Accordion.Header>
              <Accordion.Body>
                <p className="ff_outfit fw-normal clr_primary_black opacity-75 mb-0 mw_758">
                  You can scan any product with a barcode before you recycle, no
                  matter what it’s made of. Cloopp rewards you for your positive
                  actions!
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="2"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
            >
              <Accordion.Header>
                What kind of impact can I make?
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_outfit fw-normal clr_primary_black opacity-75 mb-0 mw_758">
                  You can scan any product with a barcode before you recycle, no
                  matter what it’s made of. Cloopp rewards you for your positive
                  actions!
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="3"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
            >
              <Accordion.Header>
                Which brands do you partner with?
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_outfit fw-normal clr_primary_black opacity-75 mb-0 mw_758">
                  You can scan any product with a barcode before you recycle, no
                  matter what it’s made of. Cloopp rewards you for your positive
                  actions!
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </>
  );
};

export default Frequently;
