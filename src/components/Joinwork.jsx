import React from "react";
import { Container } from "react-bootstrap";
import Pinkbtn from "./Pinkbtn";
import growLogo from "../assets/img/webp/grow-logo.webp";
const Joinwork = () => {
  return (
    <>
      <section className="bg_joinwork py-xl-4 py-5">
        <Container className="my-xl-3 my-md-5 py-xl-1">
          <div className="d-flex flex-column justify-content-center align-content-center text-center">
            <a href="#">
              <img src={growLogo} alt="grow logo" className="join_work" width={128} height={107} />
            </a>
            <h4 className="fs_4xl fw-normal clr_white my-3 py-md-1">
              Join work skill and start
              <span className="fw-semibold"> work on your</span>
              <span className="d-xl-block">
                <span className="fw-semibold"> soft </span> skills now and change yourself
              </span>
            </h4>
            <p className="fs_sm fw-normal clr_white_100 mb-0">
              Lpsum diam curabitur tincidunt sed vitae nulla a porttitor sed.
              Eros sem
              <span className="d-sm-block">sed gravida in nulla dictum</span>
            </p>
            <div className="mt-lg-5 mt-4">
              <Pinkbtn pinkbtn={"Subscribe"} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Joinwork;
