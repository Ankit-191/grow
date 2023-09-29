import React from "react";
import { Container } from "react-bootstrap";
import growLogo from "../assets/img/webp/grow-logo.webp";
import writing from "../assets/img/svg/startwriting.svg";
const Footer = () => {
  return (
    <>
      <section className="bg_footer py-xl-4 pt-md-5 pb-4">
        <Container className="text-center pt-5 pt-xl-0 py-1">
          <a href="#">
            <img src={growLogo} alt="grow logo" width={89} height={75} />
          </a>
          <ul className="my-md-4 my-3 py-xl-2 px-0 d-flex align-items-center justify-content-center gap-1 white_space">
            <li className="fs_xsm fw-normal clr_white">
              <span className="fs_sm clr_white opacity-50">© </span>
              {new Date().getFullYear()} Lior krengle
            </li>
            <li className="clr_white">
              .
              <a
                href="#"
                className="fs_xsm fw-normal clr_white text-decoration-underline ms-1"
              >
                Privacy
              </a>
            </li>
            <li className="clr_white">
              .
              <a
                href="#"
                className="fs_xsm fw-normal clr_white text-decoration-underline ms-1"
              >
                Terms
              </a>
            </li>
            <li className="clr_white">
              .
              <a
                href="#"
                className="fs_xsm fw-normal clr_white text-decoration-underline ms-1"
              >
                Collection Notice
              </a>
            </li>
          </ul>
          <div className=" d-flex justify-content-center gap-sm-4 gap-2 ">
            <button className="fs_md fw-semibold clr_black btn_start bg_white rounded-pill">
              <img
                src={writing}
                alt="writing"
                className="me-2 writing_icon"
                width={24}
                height={24}
              />
              Start Writing
            </button>
            <button className="fs_md fw-semibold clr_black btn_getapp bg_white rounded-pill">
              Get the app
            </button>
          </div>
          <div className="line_color my-md-4 my-3"></div>
          <p className="fs_xsm clr_white opacity-50 mb-0 pt-xl-1">
            <span className="text-decoration-underline">Substack</span> is the
            home for great writing
          </p>
        </Container>
      </section>
    </>
  );
};

export default Footer;
