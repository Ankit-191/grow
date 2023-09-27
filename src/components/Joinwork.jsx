import React from "react";
import { Container } from "react-bootstrap";
import Pinkbtn from "./Pinkbtn";
import growLogo from "../assets/img/webp/grow-logo.webp";
const Joinwork = () => {
  return (
    <>
      <section className="bg_joinwork py-4">
        <Container className="my-3 py-1">
          <div className="d-flex flex-column justify-content-center align-content-center text-center">
            <a href="#">
              <img src={growLogo} alt="grow logo" width={128} height={107} />
            </a>
            <h4 className="fs_4xl fw-normal clr_white my-3 py-1">
              Join work skill and start
              <span className="fw-semibold"> work on your</span>
              <span className="d-block">
                <span className="fw-semibold">soft</span> skills now and change yourself
              </span>
            </h4>
            <p className="fs_sm fw-normal clr_white_100 mb-0">
              Lpsum diam curabitur tincidunt sed vitae nulla a porttitor sed.
              Eros sem
              <span className="d-block">sed gravida in nulla dictum</span>
            </p>
            <div className="mt-5">
              <Pinkbtn pinkbtn={"Subscribe"} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Joinwork;
