import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { FrequentlyData } from "./common/Helper";

const Frequently = () => {
  return (
    <>
      <section className="my-5 py-md-5">
        <Container className="mb-xl-5">
          <h4 className="ff_outfit fs_5xl mb-3 mb-md-4 pb-lg-3 text-center">
            Frequently Asked Questions
          </h4>
          <Accordion defaultActiveKey="0">
            {FrequentlyData.map((data, index) => {
              return (
                <Accordion.Item key={index} eventKey={data.openkey}>
                  <Accordion.Header>{data.heading}</Accordion.Header>
                  <Accordion.Body>
                    <p className="ff_outfit fw-normal clr_primary_black opacity-75 mb-0 mw_758">
                      {data.para}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Container>
      </section>
    </>
  );
};

export default Frequently;
