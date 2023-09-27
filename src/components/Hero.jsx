import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <section className="hero_img vh_xl_100 d-flex flex-column">
        <Header />
        <Container className="flex-grow-1 py-5 my-5">
          <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className="fs_6xl fw-normal clr_white text-center pb-1">
              Meet <span className="fw-semibold">Work Skill </span>Your
              <span className="d-md-block">Agency for Growth</span>
            </h1>
            <p className="fs_sm fw-normal clr_white_100 text-center pb-1">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when
              <span className="d-md-block">
                looking at its layout. The point of using Lorem Ipsum is that it
                has a more-or-less norma.
              </span>
            </p>
            <button className="fs_md fw-medium clr_white btn_started rounded-pill mt-3">
              Get Started
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
